//取整
parseInt(a,10); //Before
Math.floor(a); //Before
a>>0; //Before
~~a; //After
a|0; //After

//四舍五入
Math.round(a); //Before
a+.5|0; //After

//内置值
undefined; //Before
void 0; //After, 快
0[0]; //After, 略慢

//内置值
Infinity;
1/0;

//布尔值短写法
true; //Before
!0; //After

//布尔值短写法
false; //Before
!1; //After