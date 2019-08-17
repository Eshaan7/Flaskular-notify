from .models import User, Role, UserRole
from src import ma, BaseSchema

# User Schema
class UserSchema(BaseSchema):
    class Meta:
        model = User
        exclude = ('updated_on', 'confirmed_at')
        #fields = ('id', 'email', 'username')

    id = ma.Integer(dump_only=True)
    email = ma.Email(required=False)
    mobile_number = ma.String(required=True)
    username = ma.String(required=True)
    roles = ma.Nested('RoleSchema', many=True, dump_only=True, only=('id', 'name'))

class RoleSchema(BaseSchema):
    class Meta:
        model = Role
        exclude = ('updated_on', 'created_on', 'users')

    id = ma.UUID()
    name = ma.String()
    permissions = ma.Nested('PermissionSchema', many=True, dump_only=True, only=('id', 'name'))


class UserRoleSchema(BaseSchema):
    class Meta:
        model = UserRole
        exclude = ('created_on', 'updated_on')

    id = ma.UUID(load=True)
    user_id = ma.UUID(load=True)
    role_id = ma.UUID(load=True)
    user = ma.Nested('UserSchema', many=False)
    role = ma.Nested('RoleSchema', many=False)
