from flask import request, jsonify, make_response
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity
from .models import Notification
from .schemas import notification_schema, notifications_schema
from src import db, api

class Notifications_api(Resource):

    @jwt_required
    def get(self):
        try:
            all_notifs = Notification.query.all()
            return jsonify(notifications_schema.dump(all_notifs).data)
        except Exception as e:
            return make_response(jsonify({'meta': {'code': 404, 'error': str(e) }}), 404)

    @jwt_required
    def post(self):
        current_user_id = get_jwt_identity()

        title = request.json['title']
        body = request.json['body']
        issuer_id = current_user_id

        new_notif = Notification(title, body, issuer_id)

        db.session.add(new_notif)
        db.session.commit()

        return jsonify(notification_schema.dump(new_notif).data)


class Notification_api(Resource):

    @jwt_required
    def get(self, num):
        try:
            notif = Notification.query.get_or_404(num)
        except Exception as e:
            return make_response(jsonify({'meta': {'code': 404, 'error': str(e) }}), 404)
        return jsonify(notification_schema.dump(notif).data)

    @jwt_required
    def put(self, num):
        current_user_id = get_jwt_identity()
        
        notif = Notification.query.get_or_404(num)

        if not current_user_id == notif.issuer_id:
            return make_response(jsonify({'meta': {
            'code': 403, 
            'error': "You are not allowed to edit the particular notification."
             }
            }), 403)

        notif.title = request.json['title']
        notif.body = request.json['body']

        db.session.commit()

        return jsonify(notification_schema.dump(notif).data)

    @jwt_required
    def delete(self, num):
        current_user_id = get_jwt_identity()
        notif = Notification.query.get_or_404(num)

        if not current_user_id == notif.issuer_id:
            return make_response(jsonify({'meta': {
            'code': 403, 
            'error': "You are not allowed to delete the particular notification."
             }
            }), 403)
        
        db.session.delete(notif)
        db.session.commit()

        return jsonify(notification_schema.dump(notif).data)

api.add_resource(Notifications_api, '/notifications/')
api.add_resource(Notification_api, '/notifications/<num>')