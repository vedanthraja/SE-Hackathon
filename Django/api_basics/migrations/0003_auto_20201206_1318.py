# Generated by Django 3.1.4 on 2020-12-06 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_basics', '0002_auto_20201206_1155'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='latitude',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='project',
            name='longitude',
            field=models.CharField(max_length=100),
        ),
    ]
