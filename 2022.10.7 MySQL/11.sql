-- select* from users;

-- select id,username,password from users;

-- insert into users (username,password) values('Tony Stark','098123');

-- update users set password=201306,status=1 where id=3;

-- insert into users(username,password) values('Fuck','7715');

-- delete from users where id=4;

-- select * from users where status=0 and id<3;

-- select * from users where status=1 or username='zs';

-- 对users表数据按照status进行排序(ASC升序，DESC降序)
-- select * from users order by status DESC; 
select count(*) as total from users where status = 0;