<template>
  <div class="row">
    <div class="col-md-9" role="main">
      <div class="page-header">
        <h3>{{$t('account.title')}}<small>{{$t('account.desc')}}</small><span v-text="msg"></span></h3>
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
          <a href="/basic/234?x=1&y=2">{{$t('validation.auto')}}</a>
        </li>
        <li role="presentation">
          <a href="/basic/345?x=2&y=3">{{$t('validation.submit')}}</a>
        </li>
        <li role="presentation">
          <a href="/basic/678?x=3&y=4">{{$t('validation.lazy')}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello World!'
      }
    },

    created () {
      alert(this.$parent.id);
    }
  }
</script>
