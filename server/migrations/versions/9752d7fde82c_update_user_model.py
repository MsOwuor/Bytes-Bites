"""update user model

Revision ID: 9752d7fde82c
Revises: 53a9e7e97103
Create Date: 2024-10-16 10:56:03.324094

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9752d7fde82c'
down_revision = '53a9e7e97103'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password_hash', sa.String(length=128), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    # ### end Alembic commands ###
