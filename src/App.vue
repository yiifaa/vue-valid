<template>
	<header class="navbar navbar-static-top navbar-inverse" role="banner">
		<div class="container">
			<div class="navbar-header"> 
				<button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
					<span class="sr-only">{{$t('app.collapse')}}</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a href="/" class="navbar-brand">Vue-Valid</a>
			</div>
			<ul class="nav navbar-nav">
				<li>
					<a href="../getting-started/">{{$t('menu.basic')}}</a>
				</li>
				<li>
					<a href="../css/">{{$t('menu.async')}}</a>
				</li>
				<li class="active">
					<a href="../components/">{{$t('menu.conn')}}</a>
				</li>
				<li>
					<a href="../javascript/">{{$t('menu.dynamic')}}</a>
				</li>
				<li>
					<a href="../javascript/">{{$t('menu.customer')}}</a>
				</li>
				<li>
					<a href="../customize/">{{$t('menu.i18n')}}</a>
				</li>
			</ul>
		</div>
		
	</header>
	<div class="container">
		<div class="row">
			<div class="col-md-9" role="main">
				<div class="page-header">
				  <h3>{{$t('account.title')}}<small>{{$t('account.desc')}}</small></h3>
				</div>
				<form class="form-horizontal col-md-8">
				  <div class="form-group">
				    <label for="inputEmail3" class="col-sm-2 control-label">{{$t('account.username')}}</label>
				    <div class="col-sm-10">
				      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="inputPassword3" class="col-sm-2 control-label">{{$t('account.password')}}</label>
				    <div class="col-sm-10">
				      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-10">
				      <div class="checkbox">
					<label>
					  <input type="checkbox"> {{$t('account.rememberMe')}}
					</label>
				      </div>
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-10">
				      <button type="submit" class="btn btn-default">{{$t('button.submit')}}</button>
				    </div>
				  </div>
				</form>
			</div>
			<div class="col-md-3" role="complementary">
				<ul class="nav nav-pills nav-stacked nav-pills-stacked-example">
					<li role="presentation" class="active">
						<a href="#">{{$t('validation.auto')}}</a>
					</li>
					<li role="presentation">
						<a href="#">{{$t('validation.submit')}}</a>
					</li>
					<li role="presentation">
						<a href="#">{{$t('validation.lazy')}}</a>
					</li>
				</ul>
			</div>
		</div>		
	</div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style src="../node_modules/bootstrap/dist/css/bootstrap.css"></style>
<style lang="less">
	.page-header {
		margin-top : 0px;
		>h3 {
			font-weight : bolder;
			margin-top : 0px;

			small {
				font-size : 12px;
				display : in-block;
				margin-left : 15px;
			}
		}
	}
</style>
