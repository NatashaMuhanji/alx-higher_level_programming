## Python - Object-relational mapping

### Connecting to MySQLTo connect to a MySQL database from Python, use the following code snippet:

```
pythonimport mysql.connectorcnx = mysql.connector.connect(user='username', password='password',
                              host='127.0.0.1',
                              database='yourdatabase')
cnx.close()
```

### SELECT

To select rows from a MySQL table using Python:

```
pythoncursor = cnx.cursor()
query = ("SELECT column1, column2 FROM your_table WHERE condition")
cursor.execute(query)

for (column1, column2) in cursor:
    print(f"{column1}, {column2}")

cursor.close()
```


### INSERT RowsTo insert rows into a MySQL table from a Python script:

```
cursor = cnx.cursor()
query = ("INSERT INTO your_table (column1, column2) VALUES (%s, %s)")
values = ("value1", "value2")
cursor.execute(query, values)

cnx.commit()
cursor.close()
```


### Understanding

ORM stands for Object-Relational Mapping. It's a technique for converting data between incompatible systems using object-oriented programming languages.

### Mapping Classes to TablesUsing SQLAlchemy to map a Python class to a MySQL table:

```
from sqlalchemy import create_engine, Column, String, Integer, MetaData, Tablefrom sqlalchemy.ext.declarative import declarative
from sqlalchemy.orm import sessionmakerBase = declarative_base()

class YourClass(Base):
    _tablename_ = 'your_table'
    id = Column(Integer, primary_key=True)
    column1 = Column(String)
    column2 = Column(String)

engine = create_engine('mysql+mysqlconnector://username:password@localhost/yourdatabase')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()
```


### Creating a Python Virtual EnvironmentTo create a virtual environment in Python:

`
python3 -m venv /path/to/new/virtual
`


#### Activating the virtual environment:

- On Windows:

`
cmd\path\to\new\virtual\environment\Scripts\activate.bat
`

- On Unix or MacOS:

`
source /path/to/new/virtual/environment/bin/
`
