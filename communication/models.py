from django.db import models


class LogMsgList(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)


class MsgList(models.Model):
    username = models.ForeignKey(LogMsgList, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    tel = models.CharField(max_length=30)
    mail = models.CharField(max_length=30)
    address = models.CharField(max_length=30)
    QQ = models.CharField(max_length=30)
