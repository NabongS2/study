<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%-- jsp 파일 입니다 하고 꼭 있어야 함 --%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/jsp/members/save.jsp" method="post">
    username: <input type="text" name="username" />
    age:      <input type="text" name="age" />
    <button type="submit">전송</button>
</form>
</body>
</html>
