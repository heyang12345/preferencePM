//1、加载gulp包
var gulp = require("gulp");
//引入sass插件对应的模块
var sass = require("gulp-sass");

//引入合并文件对应的模块
var concat = require("gulp-concat");

//引入压缩的模块
var uglify = require("gulp-uglify");

//sass编译任务
gulp.task("sass",function(){
	gulp.src("sass/header.scss")//源文件
	.pipe(sass())
	.pipe(gulp.dest("dist/css"));//把结果放在何处。
	
});

gulp.task("sass2",function(){
	gulp.src("sass/main.scss")//源文件
	.pipe(sass())
	.pipe(gulp.dest("dist/css"));//把结果放在何处。
	
});
gulp.task("sass3",function(){
	gulp.src("sass/public.scss")//源文件
	.pipe(sass())
	.pipe(gulp.dest("dist/css"));//把结果放在何处。
	
});

//合并
gulp.task("concatJS",function(){
	gulp.src(["js/todayUpdate.js","js/trademark.js"])
	.pipe(concat("all.js"))
	.pipe(gulp.dest("dist/js"));
});

//合并并压缩
gulp.task("uglify",function(){
	gulp.src(["js/todayUpdate.js","js/trademark.js"])
	.pipe(concat("all.js"))//合并
	.pipe(uglify())//压缩
	.pipe(gulp.dest("dist/js"));
});





















/*


//引入重命名的模块
var rename = require("gulp-rename");
//引入压缩CSS的模块
var minifycss = require('gulp-minify-css');

//2、写个copy文件的任务
gulp.task("copy-index",function(){
//	gulp.src("index.html").pipe(gulp.dest("dist"));
	//把开发的代码部署到服务器上。
	gulp.src("index.html").pipe(gulp.dest("D:/phpStudy/WWW/day16gulp"));
});

gulp.task("copy-images",function(){
	gulp.src("img/*.jpg").pipe(gulp.dest("D:/phpStudy/WWW/day16gulp/img"));
});

//






//合并，压缩，重命名
gulp.task("concatuglifyrename",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))//合并
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())//压缩
	.pipe(rename("all.min.js"))
	.pipe(gulp.dest("dist/js"));
});

gulp.task("minifycss",function(){
	gulp.src("css/index.scss")
	.pipe(sass())
	.pipe(minifycss())//压缩
	.pipe(gulp.dest("dist/css"));
});


gulp.task("watchAll",function(){
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("img/*.jpg",["copy-images"]);
	
});

*/