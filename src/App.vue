<template>
  <header class="navbar navbar-static-top navbar-inverse" role="banner">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar"
                aria-controls="bs-navbar" aria-expanded="false">
          <span class="sr-only">{{$t('app.collapse')}}</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="/" class="navbar-brand">Vue-Valid</a>
      </div>
      <ul class="nav navbar-nav">
        <li>
          <a href="/basic">{{$t('menu.basic')}}</a>
        </li>
        <li>
          <a href="/async/">{{$t('menu.async')}}</a>
        </li>
        <li class="active">
          <a href="/conn/">{{$t('menu.conn')}}</a>
        </li>
        <li>
          <a href="/basic/123">{{$t('menu.dynamic')}}</a>
        </li>
        <li>
          <a href="../customer/">{{$t('menu.customer')}}</a>
        </li>
        <li>
          <a href="../i18n/">{{$t('menu.i18n')}}</a>
        </li>
      </ul>
    </div>
  </header>
  <div class="container">
    <component :is="currentView"></component>
  </div>
</template>
<script>
  import Async from './components/Async'
  import basic from './components/Basic'
  import conn from './components/Conn'
  import Default from './components/Default'
  import CurrentViewMixin from './CurrentViewMixin'
  export default {

    mixins     : [CurrentViewMixin],

    components: {
      'async'  : Async,
      basic,
      conn,
      'defaultView' : Default
    }
  }
</script>
<style src="../node_modules/bootstrap/dist/css/bootstrap.css"></style>
<style lang="less">
  .page-header {
    margin-top: 0px;

    >h3 {
      font-weight: bolder;
      margin-top: 0px;

      small {
        font-size: 12px;
        display: inline-block;
        margin-left: 15px;
      }
    }
  }
</style>
