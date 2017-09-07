<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel Vue SPA</title>
    <link rel="stylesheet" href="/css/app.css">

</head>
<body>

<div id="app">
    <div><nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" data-toggle="collapse" data-target="#app-navbar-collapse" class="navbar-toggle collapsed"><span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
                    <router-link to="/" class="navbar-brand" exact>Vue-SPA</router-link>
                </div>
                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <ul class="nav navbar-nav"></ul>
                    <ul class="nav navbar-nav navbar-right">
                        <router-link to="/about" tag="li">
                            <a>About</a>
                        </router-link>
                    </ul>
                </div>
            </div>
        </nav></div>
    <router-view></router-view>
</div>

<script src="/js/app.js"></script>
</body>
</html>
