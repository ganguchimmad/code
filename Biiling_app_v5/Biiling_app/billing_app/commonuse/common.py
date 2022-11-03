from datetime import datetime
from django.db import connection


# creating the function tot retutn datformat in YYYY-MM-DD HH:MM:SS
def getCurrentDateTIme():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


# bind the bind table data into form
def fillddl(query, slectedValue):
    cursor = connection.cursor()
    connection.commit()
    cursor.execute(query)
    result = cursor.fetchall()
    strData = '<option value="">--Select--</option>'
    for ids in result:
        value = str(ids[0])
        display = ids[1]
        if slectedValue == value:
            strData += '<option value="' + value + '" selected>' + display + '</option>'
        else:
            strData += '<option value="' + value + '">' + display + '</option>'

    return strData
