from django.shortcuts import render
from communication.models import MsgList
from communication.models import LogMsgList


def indexpage(request):
    return render(request, 'login.html')


def login(request):
    if request.method == 'GET':
        return render(request,'login.html')
    elif request.method == 'POST':
        loginname = request.POST['user']
        loginpassword = request.POST['key']
        user = LogMsgList.objects.filter(username=loginname)
        if user.exists():
            user1=LogMsgList.objects.get(username=loginname)
            if user1.password==loginpassword:
                list1 = MsgList.objects.filter(username=user1)
                return render(request, 'numList.html', {'msglist': list1, 'listowner': loginname})
            else:
                logininfo = "error"
                return render(request, 'login.html', {'logininfo': logininfo})
        else:
            logininfo = "error"
            return render(request, 'login.html', {'logininfo': logininfo})


def initial(request):
    if request.method == 'GET':
        return render(request, 'initial.html')
    else:
        registname = request.POST['user']
        registpassword = request.POST['key']
        logmsg = LogMsgList(username=registname, password=registpassword)
        logmsg.save()
        logininfo='111'
        return render(request, 'login.html', {'logininfo': logininfo})


