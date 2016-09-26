/**
 * Created by jerry on 2016-09-26.
 */
由于在jquery1.9以上的版本文件模块化以后（AMD的加载方式），全局作用域已经不存在jquery或者$了。而seajs的加载方式CMD的加载方式，就必须手动将他们封装成CMD模块。
1）直接对jquery进行使用
		seajs.use('jquery'),define(function() {	
	    	$('body').css({'background':'red'});
		});
2）在使用seajs.use之前加上
		define.amd = true;
		seajs.config({
		    alias: {
		      "jquery":"jquery-1.10.2.min.js"
		    }
			
		});
	 	define.amd = true;
		seajs.use('./main')
3）直接修改jq的源码中修改jquery的路径。
	"function" == typeof define && define("jquery", [], function() {
		return x
	})
		seajs.config({
		    alias: {
		      "jquery":"jquery"
		    }
			
		});
		
		seajs.use('./main');