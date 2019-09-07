SELECT USER_NAME FROM Users 
INNER JOIN Posts ON Posts.USER_ID = Users.USER_ID
WHERE date(CREATION_DATE) = CURDATE()
GROUP BY Users.USER_ID
HAVING COUNT(Posts.POST_ID) > 3;