import os
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from app import create_app, db  # Import the create_app function from your app module

app = create_app()
migrate = Migrate(app, db)
manager = Manager(app)

# Add the db command to the manager
manager.add_command('db', MigrateCommand)

@manager.command
def create_db():
    """Creates the database tables."""
    with app.app_context():
        db.create_all()

if __name__ == '__main__':
    manager.run()
