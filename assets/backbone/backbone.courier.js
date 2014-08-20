




<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>backbone.courier/backbone.courier.js at master · rotundasoftware/backbone.courier · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="rotundasoftware/backbone.courier" name="twitter:title" /><meta content="backbone.courier - Easily bubble events up your view hierarchy in your Backbone.js applications." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/3394374?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/3394374?v=2&amp;s=400" property="og:image" /><meta content="rotundasoftware/backbone.courier" property="og:title" /><meta content="https://github.com/rotundasoftware/backbone.courier" property="og:url" /><meta content="backbone.courier - Easily bubble events up your view hierarchy in your Backbone.js applications." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="02847F79:7B5F:5394310:53E79817" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="4/0Dl6uP+/nM46BTVIx+v7ySmzW6Ao+xRiBdRtkl0NsYAf4xC9ZpaRN0GkTbPGS3kL05M1LhV4xWrnterzD22A==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-552c62186b3c4c8234a6c1e644620db9c279e080.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-b855c0b37e346d3dac214385acbf7f00a78096db.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="578b163ff171518e5f8a90209edf4732">

      
  <meta name="description" content="backbone.courier - Easily bubble events up your view hierarchy in your Backbone.js applications.">


  <meta content="3394374" name="octolytics-dimension-user_id" /><meta content="rotundasoftware" name="octolytics-dimension-user_login" /><meta content="7572550" name="octolytics-dimension-repository_id" /><meta content="rotundasoftware/backbone.courier" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="7572550" name="octolytics-dimension-repository_network_root_id" /><meta content="rotundasoftware/backbone.courier" name="octolytics-dimension-repository_network_root_nwo" />

  <link href="https://github.com/rotundasoftware/backbone.courier/commits/master.atom" rel="alternate" title="Recent Commits to backbone.courier:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Frotundasoftware%2Fbackbone.courier%2Fblob%2Fmaster%2Fsrc%2Fbackbone.courier.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
          <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
    data-repo="rotundasoftware/backbone.courier"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="rotundasoftware/backbone.courier">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Frotundasoftware%2Fbackbone.courier"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/rotundasoftware/backbone.courier/stargazers">
      91
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Frotundasoftware%2Fbackbone.courier"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/rotundasoftware/backbone.courier/network" class="social-count">
        14
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/rotundasoftware" class="url fn" itemprop="url" rel="author"><span itemprop="title">rotundasoftware</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/rotundasoftware/backbone.courier" class="js-current-repository js-repo-home-link">backbone.courier</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/rotundasoftware/backbone.courier/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/rotundasoftware/backbone.courier" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /rotundasoftware/backbone.courier">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/rotundasoftware/backbone.courier/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /rotundasoftware/backbone.courier/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/rotundasoftware/backbone.courier/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /rotundasoftware/backbone.courier/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/rotundasoftware/backbone.courier/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /rotundasoftware/backbone.courier/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/rotundasoftware/backbone.courier/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /rotundasoftware/backbone.courier/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/rotundasoftware/backbone.courier.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/rotundasoftware/backbone.courier.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/rotundasoftware/backbone.courier" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/rotundasoftware/backbone.courier" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/rotundasoftware/backbone.courier/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download rotundasoftware/backbone.courier as a zip file"
                   title="Download rotundasoftware/backbone.courier as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/rotundasoftware/backbone.courier/blob/5cdd99d0a9a3bc530f9e492470af31595e80c5a0/src/backbone.courier.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:e6e7646a24612a3e10d901812241e50e -->

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rotundasoftware/backbone.courier/blob/gh-pages/src/backbone.courier.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rotundasoftware/backbone.courier/blob/master/src/backbone.courier.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rotundasoftware/backbone.courier/tree/v0.6.1/src/backbone.courier.js"
                 data-name="v0.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.1">v0.6.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rotundasoftware/backbone.courier/tree/v0.6.0/src/backbone.courier.js"
                 data-name="v0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.0">v0.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rotundasoftware/backbone.courier/tree/v0.5.11/src/backbone.courier.js"
                 data-name="v0.5.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.5.11">v0.5.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rotundasoftware/backbone.courier/tree/0.5.7/src/backbone.courier.js"
                 data-name="0.5.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.7">0.5.7</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/rotundasoftware/backbone.courier/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="src/backbone.courier.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rotundasoftware/backbone.courier" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">backbone.courier</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rotundasoftware/backbone.courier/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">backbone.courier.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/rotundasoftware/backbone.courier/contributors/master/src/backbone.courier.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span class="mode" title="File mode">executable file</span>
          <span class="meta-divider"></span>
          <span>203 lines (163 sloc)</span>
          <span class="meta-divider"></span>
        <span>8.375 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/rotundasoftware/backbone.courier/raw/master/src/backbone.courier.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/rotundasoftware/backbone.courier/blame/master/src/backbone.courier.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/rotundasoftware/backbone.courier/commits/master/src/backbone.courier.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      
<table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-line-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-line-code js-file-line"><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-line-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-line-code js-file-line">	<span class="c1">// UMD wrapper.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-line-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-line-code js-file-line">	<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-line-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-line-code js-file-line">		<span class="c1">// AMD</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-line-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-line-code js-file-line">		<span class="nx">define</span><span class="p">(</span> <span class="p">[</span> <span class="s1">&#39;underscore&#39;</span><span class="p">,</span> <span class="s1">&#39;backbone&#39;</span><span class="p">,</span> <span class="s1">&#39;jquery&#39;</span> <span class="p">],</span> <span class="nx">factory</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-line-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-line-code js-file-line">	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">exports</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-line-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-line-code js-file-line">		<span class="c1">// Node/CommonJS</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-line-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-line-code js-file-line">		<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;underscore&#39;</span> <span class="p">),</span> <span class="nx">require</span><span class="p">(</span> <span class="s1">&#39;backbone&#39;</span> <span class="p">),</span> <span class="nx">require</span><span class="p">(</span> <span class="s1">&#39;backbone&#39;</span> <span class="p">).</span><span class="nx">$</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-line-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-line-code js-file-line">	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-line-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-line-code js-file-line">		<span class="c1">// Browser globals</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-line-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-line-code js-file-line">		<span class="nx">factory</span><span class="p">(</span> <span class="nx">root</span><span class="p">.</span><span class="nx">_</span><span class="p">,</span> <span class="nx">root</span><span class="p">.</span><span class="nx">Backbone</span><span class="p">,</span> <span class="p">(</span> <span class="nx">root</span><span class="p">.</span><span class="nx">jQuery</span> <span class="o">||</span> <span class="nx">root</span><span class="p">.</span><span class="nx">Zepto</span> <span class="o">||</span> <span class="nx">root</span><span class="p">.</span><span class="nx">$</span> <span class="p">)</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-line-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-line-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-line-code js-file-line"><span class="p">}(</span> <span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">,</span> <span class="nx">$</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-line-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">delegateEventSplitter</span> <span class="o">=</span> <span class="sr">/^(\S+)\s*(.*)$/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-line-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">lastPossibleViewElement</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">$</span> <span class="p">)</span> <span class="o">?</span> <span class="nx">$</span><span class="p">(</span> <span class="s2">&quot;body&quot;</span> <span class="p">)[</span> <span class="mi">0</span> <span class="p">]</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-line-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-line-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-line-code js-file-line">	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Courier</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-line-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-line-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-line-code js-file-line">	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Courier</span><span class="p">.</span><span class="nx">add</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">view</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-line-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-line-code js-file-line">		<span class="kd">var</span> <span class="nx">overriddenViewMethods</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-line-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-line-code js-file-line">			<span class="nx">setElement</span> <span class="o">:</span> <span class="nx">view</span><span class="p">.</span><span class="nx">setElement</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-line-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-line-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-line-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-line-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-line-code js-file-line">		<span class="c1">// ****************** Public Courier functions ****************** </span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-line-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-line-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-line-code js-file-line">		<span class="nx">view</span><span class="p">.</span><span class="nx">spawn</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">message</span><span class="p">,</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-line-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-line-code js-file-line">			<span class="c1">// can be called with message argument as an object, in which case message.name is required,</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-line-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-line-code js-file-line">			<span class="c1">// or can be called with message as a string that represents the name of the message and</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-line-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-line-code js-file-line">			<span class="c1">// data object which will be added to message object at message.data</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-line-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-line-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span> <span class="nx">message</span> <span class="p">)</span> <span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-line-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-line-code js-file-line">				<span class="nx">message</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-line-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-line-code js-file-line">					<span class="nx">name</span> <span class="o">:</span> <span class="nx">message</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-line-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-line-code js-file-line">					<span class="nx">data</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="p">{},</span> <span class="nx">data</span> <span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-line-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-line-code js-file-line">				<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-line-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-line-code js-file-line">			<span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span> <span class="nx">message</span><span class="p">.</span><span class="nx">name</span> <span class="p">)</span> <span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span> <span class="s2">&quot;Undefined message name.&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-line-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-line-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-line-code js-file-line">			<span class="nx">message</span><span class="p">.</span><span class="nx">source</span> <span class="o">=</span> <span class="nx">view</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-line-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-line-code js-file-line">			<span class="nx">message</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">message</span><span class="p">.</span><span class="nx">data</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-line-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-line-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-line-code js-file-line">			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="nx">message</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="nx">message</span><span class="p">.</span><span class="nx">data</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-line-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L42" class="blob-line-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-line-code js-file-line">			<span class="kd">var</span> <span class="nx">isRoundTripMessage</span> <span class="o">=</span> <span class="nx">message</span><span class="p">.</span><span class="nx">name</span><span class="p">[</span> <span class="nx">message</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">]</span> <span class="o">===</span> <span class="s2">&quot;!&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-line-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-line-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-line-code js-file-line">			<span class="kd">var</span> <span class="nx">curParent</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getParentView</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-line-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-line-code js-file-line">			<span class="kd">var</span> <span class="nx">messageShouldBePassed</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-line-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-line-code js-file-line">			<span class="kd">var</span> <span class="nx">value</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-line-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L48" class="blob-line-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-line-code js-file-line">			<span class="k">while</span><span class="p">(</span> <span class="nx">curParent</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-line-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-line-code js-file-line">				<span class="c1">// check to see if curParent has an action to perform when this message is received.</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-line-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-line-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span> <span class="nx">curParent</span><span class="p">.</span><span class="nx">onMessages</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-line-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-line-code js-file-line">					<span class="nx">value</span> <span class="o">=</span> <span class="nx">getValueOfBestMatchingHashEntry</span><span class="p">(</span> <span class="nx">curParent</span><span class="p">.</span><span class="nx">onMessages</span><span class="p">,</span> <span class="nx">message</span><span class="p">,</span> <span class="nx">curParent</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-line-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-line-code js-file-line">					<span class="k">if</span><span class="p">(</span> <span class="nx">value</span> <span class="o">!==</span> <span class="kc">null</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-line-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-line-code js-file-line">						<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-line-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-line-code js-file-line">						<span class="k">if</span><span class="p">(</span> <span class="o">!</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">method</span> <span class="p">)</span> <span class="p">)</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">curParent</span><span class="p">[</span> <span class="nx">value</span> <span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-line-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-line-code js-file-line">						<span class="k">if</span><span class="p">(</span> <span class="o">!</span> <span class="nx">method</span> <span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span> <span class="s2">&quot;Method \&quot;&quot;</span> <span class="o">+</span> <span class="nx">value</span> <span class="o">+</span> <span class="s2">&quot;\&quot; does not exist&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-line-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L57" class="blob-line-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-line-code js-file-line">						<span class="kd">var</span> <span class="nx">returnValue</span> <span class="o">=</span> <span class="nx">method</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">curParent</span><span class="p">,</span> <span class="nx">message</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-line-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-line-code js-file-line">						<span class="k">if</span><span class="p">(</span> <span class="nx">isRoundTripMessage</span> <span class="p">)</span> <span class="k">return</span> <span class="nx">returnValue</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-line-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-line-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-line-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-line-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-line-code js-file-line">				<span class="nx">messageShouldBePassed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-line-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-line-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-line-code js-file-line">				<span class="c1">// execute `passMessages` if its configured as a function</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-line-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">passMessages</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">result</span><span class="p">(</span> <span class="nx">curParent</span><span class="p">,</span> <span class="s2">&quot;passMessages&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-line-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-line-code js-file-line">				<span class="c1">// check to see if this message should be passed up a level</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-line-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-line-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span> <span class="nx">passMessages</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-line-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-line-code js-file-line">					<span class="nx">value</span> <span class="o">=</span> <span class="nx">getValueOfBestMatchingHashEntry</span><span class="p">(</span> <span class="nx">passMessages</span><span class="p">,</span> <span class="nx">message</span><span class="p">,</span> <span class="nx">curParent</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-line-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-line-code js-file-line">					<span class="k">if</span><span class="p">(</span> <span class="nx">value</span> <span class="o">!==</span> <span class="kc">null</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-line-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-line-code js-file-line">						<span class="k">if</span><span class="p">(</span> <span class="nx">value</span> <span class="o">===</span> <span class="s2">&quot;.&quot;</span> <span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-line-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-line-code js-file-line">							<span class="p">;</span> <span class="c1">// noop - pass this message through exactly as-is</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-line-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-line-code js-file-line">						<span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span> <span class="nx">value</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-line-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-line-code js-file-line">							<span class="c1">// if value is a string, we pass the existing message but</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-line-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-line-code js-file-line">							<span class="c1">// change the name to the supplied string</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-line-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-line-code js-file-line">							<span class="nx">message</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-line-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-line-code js-file-line">						<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-line-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-line-code js-file-line">						<span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">value</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-line-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-line-code js-file-line">							<span class="c1">// if value is a function, we call the function after clearing the</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-line-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-line-code js-file-line">							<span class="c1">// message data, in order that it may modify the message as it sees</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-line-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-line-code js-file-line">							<span class="c1">// fit (adding new data, changing the name), and then pass the message</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-line-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-line-code js-file-line">							<span class="kd">var</span> <span class="nx">oldMessageData</span> <span class="o">=</span> <span class="nx">message</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-line-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-line-code js-file-line">							<span class="nx">message</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-line-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-line-code js-file-line">							<span class="nx">value</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">curParent</span><span class="p">,</span> <span class="nx">message</span><span class="p">,</span> <span class="nx">oldMessageData</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-line-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-line-code js-file-line">						<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-line-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-line-code js-file-line">						<span class="k">else</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span> <span class="s2">&quot;Values of passMessages hash should be strings or functions.&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-line-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L87" class="blob-line-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-line-code js-file-line">						<span class="nx">messageShouldBePassed</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-line-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-line-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-line-code js-file-line">					<span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">isRoundTripMessage</span> <span class="p">)</span> <span class="nx">messageShouldBePassed</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span> <span class="c1">// round trip messages are passed up even if there is not an entry in the passMessages hash</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-line-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-line-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-line-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-line-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="nx">isRoundTripMessage</span> <span class="p">)</span> <span class="nx">messageShouldBePassed</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span> <span class="c1">// round trip messages are passed up even if there is not an entry in the passMessages hash</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-line-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L94" class="blob-line-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-line-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="o">!</span> <span class="nx">messageShouldBePassed</span> <span class="p">)</span> <span class="k">break</span><span class="p">;</span> <span class="c1">// if this message should not be passed, then we are done</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-line-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-line-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-line-code js-file-line">				<span class="nx">message</span><span class="p">.</span><span class="nx">source</span> <span class="o">=</span> <span class="nx">curParent</span><span class="p">;</span> <span class="c1">// keep the source of the message current as the message bubbles up the view hierarchy</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-line-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-line-code js-file-line">				<span class="nx">curParent</span> <span class="o">=</span> <span class="nx">curParent</span><span class="p">.</span><span class="nx">_getParentView</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-line-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-line-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L100" class="blob-line-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-line-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">isRoundTripMessage</span> <span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-line-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-line-code js-file-line">				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span> <span class="s2">&quot;Round trip message \&quot;&quot;</span> <span class="o">+</span> <span class="nx">message</span><span class="p">.</span><span class="nx">name</span> <span class="o">+</span> <span class="s2">&quot;\&quot; was not handled. All round trip messages must be handled.&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-line-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-line-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-line-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L104" class="blob-line-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-line-code js-file-line">		<span class="c1">// supply your own _getParentView function on your view objects</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-line-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-line-code js-file-line">		<span class="c1">// if you would like to use custom means to determine a view&#39;s</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-line-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-line-code js-file-line">		<span class="c1">// &quot;parent&quot;. The default means is to traverse the DOM tree and return</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-line-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-line-code js-file-line">		<span class="c1">// the closest parent element that has a view object attached in el.data( &quot;view&quot; )</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-line-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-line-code js-file-line">		<span class="k">if</span><span class="p">(</span> <span class="o">!</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">view</span><span class="p">.</span><span class="nx">_getParentView</span> <span class="p">)</span> <span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-line-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-line-code js-file-line">			<span class="nx">view</span><span class="p">.</span><span class="nx">_getParentView</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-line-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">parent</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-line-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">curElement</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">parent</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-line-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-line-code js-file-line">				<span class="k">while</span><span class="p">(</span> <span class="nx">curElement</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">curElement</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">lastPossibleViewElement</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-line-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-line-code js-file-line">					<span class="kd">var</span> <span class="nx">view</span> <span class="o">=</span> <span class="nx">curElement</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span> <span class="s2">&quot;view&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-line-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-line-code js-file-line">					<span class="k">if</span><span class="p">(</span> <span class="nx">view</span> <span class="o">&amp;&amp;</span> <span class="nx">view</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">View</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-line-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-line-code js-file-line">						<span class="nx">parent</span> <span class="o">=</span> <span class="nx">view</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-line-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-line-code js-file-line">						<span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-line-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-line-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L119" class="blob-line-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-line-code js-file-line">					<span class="nx">curElement</span> <span class="o">=</span> <span class="nx">curElement</span><span class="p">.</span><span class="nx">parent</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-line-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-line-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-line-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-line-code js-file-line">				<span class="k">return</span> <span class="nx">parent</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-line-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-line-code js-file-line">			<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-line-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L125" class="blob-line-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-line-code js-file-line">		<span class="c1">// supply your own _getChildViewNamed function on your view objects</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-line-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-line-code js-file-line">		<span class="c1">// if you would like to use another means to test the source of your</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-line-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-line-code js-file-line">		<span class="c1">// messages (used for keys of onMessages and passMessages of the form</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-line-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-line-code js-file-line">		<span class="c1">// { &quot;message source&quot; : handler }). By default, child views are looked</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-line-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-line-code js-file-line">		<span class="c1">// up by name in view.subviews[ childViewName ] (and then tested against message.source)</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-line-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-line-code js-file-line">		<span class="k">if</span><span class="p">(</span> <span class="o">!</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">view</span><span class="p">.</span><span class="nx">_getChildViewNamed</span> <span class="p">)</span> <span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-line-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-line-code js-file-line">			<span class="nx">view</span><span class="p">.</span><span class="nx">_getChildViewNamed</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">childViewName</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-line-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-line-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="o">!</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">subviews</span> <span class="p">)</span> <span class="p">)</span> <span class="k">return</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-line-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-line-code js-file-line">				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">subviews</span><span class="p">[</span> <span class="nx">childViewName</span> <span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-line-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-line-code js-file-line">			<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-line-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-line-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-line-code js-file-line">		<span class="c1">// ****************** Overridden Backbone.View functions ****************** </span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-line-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L138" class="blob-line-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-line-code js-file-line">		<span class="nx">view</span><span class="p">.</span><span class="nx">setElement</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">delegate</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-line-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-line-code js-file-line">			<span class="kd">var</span> <span class="nx">retval</span> <span class="o">=</span> <span class="nx">overriddenViewMethods</span><span class="p">.</span><span class="nx">setElement</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">delegate</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-line-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-line-code js-file-line">			<span class="nx">prepareViewElement</span><span class="p">(</span> <span class="nx">view</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-line-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="nx">retval</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-line-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-line-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-line-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L144" class="blob-line-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-line-code js-file-line">		<span class="c1">// ****************** Body of Backbone.Courier.add() function ****************** </span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-line-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L146" class="blob-line-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-line-code js-file-line">		<span class="k">if</span><span class="p">(</span> <span class="nx">view</span><span class="p">.</span><span class="nx">$el</span> <span class="p">)</span> <span class="nx">prepareViewElement</span><span class="p">(</span> <span class="nx">view</span> <span class="p">);</span> <span class="c1">// otherwise this will be done when #setElement is called</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-line-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-line-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-line-code js-file-line">		<span class="c1">// ****************** Private Utility Functions ****************** </span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-line-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-line-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-line-code js-file-line">		<span class="kd">function</span> <span class="nx">prepareViewElement</span><span class="p">(</span> <span class="nx">view</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-line-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-line-code js-file-line">			<span class="c1">// store a reference to the view object in the DOM element&#39;s jQuery data. Make sure it is supported.</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-line-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-line-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">view</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">data</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span> <span class="nx">view</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span> <span class="s2">&quot;view&quot;</span> <span class="p">)</span> <span class="p">)</span> <span class="nx">view</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span> <span class="s2">&quot;view&quot;</span><span class="p">,</span> <span class="nx">view</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-line-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-line-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-line-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-line-code js-file-line">		<span class="kd">function</span> <span class="nx">getValueOfBestMatchingHashEntry</span><span class="p">(</span> <span class="nx">hash</span><span class="p">,</span> <span class="nx">message</span><span class="p">,</span> <span class="nx">view</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-line-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-line-code js-file-line">			<span class="c1">// return the value of the entry in a onMessages or passMessages hash that is the </span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-line-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-line-code js-file-line">			<span class="c1">// &quot;most specific&quot; match for this message, or null, if there are no matches.</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-line-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L159" class="blob-line-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-line-code js-file-line">			<span class="kd">var</span> <span class="nx">matchingEntries</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-line-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L161" class="blob-line-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-line-code js-file-line">			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">hash</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-line-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-line-code js-file-line">				<span class="c1">// We are looking for keys in the hash that have the `message` argument</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-line-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-line-code js-file-line">				<span class="c1">// as the first word of their key. If we find one, they either need</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-line-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-line-code js-file-line">				<span class="c1">// no source qualifier as the second word of the key (in which case</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-line-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-line-code js-file-line">				<span class="c1">// we will pass this message regardless of where it comes from),</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-line-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-line-code js-file-line">				<span class="c1">// or we need this the name of the subview that is the source of the</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-line-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-line-code js-file-line">				<span class="c1">// message second word of the key.</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-line-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L169" class="blob-line-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="nx">key</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="nx">delegateEventSplitter</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-line-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L171" class="blob-line-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">eventName</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span> <span class="mi">1</span> <span class="p">],</span> <span class="nx">subviewName</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span> <span class="mi">2</span> <span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-line-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">eventNameRegEx</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="nx">eventName</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="s2">&quot;*&quot;</span><span class="p">,</span> <span class="s2">&quot;[\\w]*&quot;</span> <span class="p">)</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-line-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-line-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="o">!</span> <span class="nx">eventNameRegEx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">message</span><span class="p">.</span><span class="nx">name</span> <span class="p">)</span> <span class="p">)</span> <span class="k">continue</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-line-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L175" class="blob-line-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-line-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="nx">subviewName</span> <span class="o">!==</span> <span class="s2">&quot;&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">view</span><span class="p">.</span><span class="nx">_getChildViewNamed</span><span class="p">(</span> <span class="nx">subviewName</span> <span class="p">)</span> <span class="o">!==</span> <span class="nx">message</span><span class="p">.</span><span class="nx">source</span> <span class="p">)</span> <span class="k">continue</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-line-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-line-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-line-code js-file-line">				<span class="nx">matchingEntries</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">{</span> <span class="nx">eventName</span> <span class="o">:</span> <span class="nx">eventName</span><span class="p">,</span> <span class="nx">subviewName</span> <span class="o">:</span> <span class="nx">subviewName</span><span class="p">,</span> <span class="nx">value</span> <span class="o">:</span> <span class="nx">hash</span><span class="p">[</span> <span class="nx">key</span> <span class="p">]</span> <span class="p">}</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-line-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-line-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L180" class="blob-line-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-line-code js-file-line">			<span class="c1">// if more than one hash keys match, order them by specificity, that is,</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-line-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-line-code js-file-line">			<span class="c1">// in descending order of how many non-wild card characters they contain,</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-line-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-line-code js-file-line">			<span class="c1">// so that entry with most specificity is at index 0. Also, consider any</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-line-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-line-code js-file-line">			<span class="c1">// entries that have subview qualifier more specific than those that do not.</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-line-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-line-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">matchingEntries</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-line-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-line-code js-file-line">				<span class="nx">matchingEntries</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">sortBy</span><span class="p">(</span> <span class="nx">matchingEntries</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">thisEntry</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-line-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-line-code js-file-line">					<span class="kd">var</span> <span class="nx">nonWildcardCharactersInEventName</span> <span class="o">=</span> <span class="nx">thisEntry</span><span class="p">.</span><span class="nx">eventName</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="s2">&quot;*&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-line-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-line-code js-file-line">					<span class="kd">var</span> <span class="nx">hasSubviewQualifier</span> <span class="o">=</span> <span class="nx">thisEntry</span><span class="p">.</span><span class="nx">subviewName</span> <span class="o">!==</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-line-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L189" class="blob-line-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-line-code js-file-line">					<span class="c1">// promote all entries with subview qualifiers to a higher level of specificity.</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-line-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-line-code js-file-line">					<span class="c1">// Figure there will never, ever be a 1000 character long event name</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-line-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-line-code js-file-line">					<span class="kd">var</span> <span class="nx">specificity</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">hasSubviewQualifier</span> <span class="o">?</span> <span class="mi">1000</span> <span class="o">:</span> <span class="mi">0</span> <span class="p">)</span> <span class="o">+</span> <span class="nx">nonWildcardCharactersInEventName</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-line-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L193" class="blob-line-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-line-code js-file-line">					<span class="c1">// negate to sort in descending order</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-line-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-line-code js-file-line">					<span class="k">return</span><span class="p">(</span> <span class="o">-</span> <span class="nx">specificity</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-line-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-line-code js-file-line">				<span class="p">}</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-line-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L197" class="blob-line-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="nx">matchingEntries</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">matchingEntries</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">value</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-line-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-line-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-line-code js-file-line">	<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-line-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-line-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-line-code js-file-line">	<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Courier</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-line-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-line-code js-file-line"><span class="p">}</span> <span class="p">)</span> <span class="p">);</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04845s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-12d5fda141e78e513749dddbc56445fe172cbd9a.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-91c8c29a09ed2b10dc0fe500f8ca17a791e374ae.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

