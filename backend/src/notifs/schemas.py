from src import ma, BaseSchema
from src.users.schemas import UserSchema
from .models import Notification

# Notification Schema
class NotificationSchema(BaseSchema):
	class Meta:
		model = Notification
		fields = ('id', 'issuer', 'title', 'body', 'updated_on')

	id = ma.Integer(dump_only=True)
	title = ma.String(required=True)
	body = ma.String(required=True)
	updated_on = ma.DateTime(format='%Y-%m-%d %I:%M %p') # Using IST
	issuer = ma.Nested(UserSchema, many=False, only=('id', 'username'))


notification_schema = NotificationSchema()
notifications_schema = NotificationSchema(many=True)