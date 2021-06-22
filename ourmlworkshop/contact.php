
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Material Design for Bootstrap</title>
  <!-- MDB icon -->
  <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <!-- Material Design Bootstrap -->
  <link rel="stylesheet" href="css/mdb.min.css">
  <!-- Your custom styles (optional) -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>



    <!--Main Navigation-->
    <div class="container">
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark scrolling-navbar border border-primary border-top-0 shadow">
        <a class="navbar-brand mx-auto" href="index.html" title="">
          <strong class="animated flipinY infinite slow h3">𝕠𝕦𝕣 𝕄𝕃 𝕨𝕠𝕣𝕜𝕤𝕙𝕠𝕡</strong>
        </a>
      </nav>
  
      <!-- Horizontal Line  -->
      <hr class="font-weight-bolder w-75 border border-success my-1"></div>

    <!-- Sidebar navigation -->
    <div id="slide-out" class="side-nav sn-bg-4">
      <ul class="custom-scrollbar">
        <!-- Logo -->
        <li>
          <div class="logo-wrapper waves-light text-center">
            <a href="#"><img src="" class="img-fluid flex-center">our ML workshop</a>
          </div>
        </li>
        <!--/. Logo -->
        <!--Social-->
        <li>
          <ul class="social">
            <li><a href="#" class="icons-sm fb-ic"><i class="fab fa-facebook-f"> </i></a></li>
            <li><a href="#" class="icons-sm pin-ic"><i class="fab fa-pinterest"> </i></a></li>
            <li><a href="#" class="icons-sm gplus-ic"><i class="fab fa-google-plus-g"> </i></a></li>
            <li><a href="#" class="icons-sm tw-ic"><i class="fab fa-twitter"> </i></a></li>
          </ul>
        </li>
        <!--/Social-->
        <!--Search Form-->
        <li>
          <form class="search-form" role="search">
            <div class="form-group md-form mt-0 pt-1 waves-light">
              <input type="text" class="form-control" placeholder="Search">
            </div>
          </form>
        </li>
        <!--/.Search Form-->
        <!-- Side navigation links -->
        <li>
          <ul class="collapsible collapsible-accordion">
            <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-chevron-right"></i> Submit
                blog<i class="fas fa-angle-down rotate-icon"></i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#" class="waves-effect">Submit listing</a>
                  </li>
                  <li><a href="#" class="waves-effect">Registration form</a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-hand-pointer-o"></i>
                Instruction<i class="fas fa-angle-down rotate-icon"></i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#" class="waves-effect">For bloggers</a>
                  </li>
                  <li><a href="#" class="waves-effect">For authors</a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-eye"></i> About<i class="fas fa-angle-down rotate-icon"></i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#" class="waves-effect">Introduction</a>
                  </li>
                  <li><a href="#" class="waves-effect">Monthly meetings</a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-envelope-o"></i> Contact me<i
                  class="fas fa-angle-down rotate-icon"></i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#" class="waves-effect">FAQ</a>
                  </li>
                  <li><a href="#" class="waves-effect">Write a message</a>
                  </li>
                  <li><a href="#" class="waves-effect">FAQ</a>
                  </li>
                  <li><a href="#" class="waves-effect">Write a message</a>
                  </li>
                  <li><a href="#" class="waves-effect">FAQ</a>
                  </li>
                  <li><a href="#" class="waves-effect">Write a message</a>
                  </li>
                  <li><a href="#" class="waves-effect">FAQ</a>
                  </li>
                  <li><a href="#" class="waves-effect">Write a message</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <!--/. Side navigation links -->
      </ul>
      <div class="sidenav-bg mask-strong"></div></div>
    <!--/. Sidebar navigation -->


    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark scrolling-navbar" id="navBar">
      
       <!-- SideNav slide-out button -->
      <div class="float-left">
        <a href="#" data-activates="slide-out" class="button-collapse"><i class="fas fa-bars"></i></a>
      </div>   
      <!-- Brand -->
      <a class="navbar-brand" href="#" target="_blank">
        <img src="img/logo-final.png" alt="logo" style="width: 40px">
      </a>

      <!-- Collapse -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <!-- Left -->
        <ul class="navbar-nav mr-auto font-weight-bold h5">
          <li class="nav-item mx-1">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown mx-1">
            <a class="nav-link dropdown-toggler" data-toggle="dropdown" href="#">ML Projects</a>
            <div class="dropdown-menu dropdown-primary bg-dark mr-auto">
              <a class="dropdown-item text-white font-weight-bold border border-warning" href="#" title="">Email Classifier</a>
              <a class="dropdown-item text-white font-weight-bold border border-warning border-top-0" href="#" title="">Project - 1</a>
              <a class="dropdown-item text-white font-weight-bold border border-warning border-top-0" href="#" title="">Project - 2</a>
            </div>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link" href="#" target="_blank">About</a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <!-- Left -->

        <!-- Right -->
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item mx-1">
            <a href="#" class="nav-link" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="nav-item mx-1">
            <a href="#" class="nav-link" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item mx-1">
            <a href="#" class="nav-link border border-light rounded"
            target="_blank">
              <i class="fab fa-github mr-2"></i>ourMLworkshop GitHub
            </a>
          </li>
        </ul>
        <!-- Right  -->

      </div>
      <!-- Links -->
  
    </nav>
    <!-- Navbar -->

    <!-- Container for Modal  -->
  <div class="container z-depth-1 my-5 px-0">


  <!--Section: Content-->
  <section class="p-5 my-md-5 text-center" 
    style="background-image: url(https://mdbootstrap.com/img/Photos/Others/background2.jpg); background-size: cover; background-position: center center;">

    <!-- Section heading -->
    <h3 class="text-center font-weight-bold text-white mt-5 mb-3">Contact Us</h3>
    <!-- Section description -->
    <h4 class="text-center font-weight-normal text-white mx-auto mb-4 pb-2">We love to hear from you!</h4>

    <form class="mb-5 mx-md-0" action="mail.php" method="POST">

      <div class="row">
        
        <div class="col-md-6">
          <img src="img/ceo.jpg" class="img-fluid" alt="">
        </div>

        <div class="col-md-6">
          
          

        <div class="row">
          <div class="col-md-4 mb-4">

          <!-- Name -->
          <label for="name"></label>
          <input type="text" id="name" name="name" class="form-control" placeholder="Name" required="required">

        </div>
        <div class="col-md-4 mb-4">

          <!-- Email -->
          <label for="email"></label>
          
          <input type="email" id="email" name="email" class="form-control" placeholder="Email" required="required">

        </div>
        <div class="col-md-4 mb-4">

          <!-- Phone -->
          <label for="phone"></label>
          
          <input type="number" id="phone" name="phone" class="form-control" placeholder="Phone (optional)" required="required">

        </div>
      </div>

      <div class="row">
        <div class="col-md-12 mb-4">

          <!-- Subject -->
          <label for="subject"></label>
          
          <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject" required="required">

        </div>
      </div>

      <div class="row">
        <div class="col-md-12">

          <div class="form-group mb-4">
            <textarea class="form-control rounded" id="message" rows="3" placeholder="How can we help?" required="required"></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-elegant" name="submit">Submit</button>
          </div>

        </div>
      </div>
    </div>
  </div>
    </form>

  </section>
  <!--Section: Content-->
  <!-- End your project here-->
</div>

<!-- Section: Contact v.1 -->
<section class="my-5">

      <!-- Grid column -->
    <div class="col-lg-12">

      <!--Google map-->
      <div id="map-container-section" class="z-depth-1-half map-container-section mb-4" style="height: 400px">
        <iframe src="https://maps.google.com/maps?q=Manhatan&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0"
          style="border:0; width: 100%; height: 100%;" allowfullscreen></iframe>
      </div>
      <!-- Grid column -->

  </div>
  <!-- Grid row -->

</section>
<!-- Section: Contact v.1 -->
  <!-- jQuery -->
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <!-- Bootstrap tooltips -->
  <script type="text/javascript" src="js/popper.min.js"></script>
  <!-- Bootstrap core JavaScript -->
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <!-- MDB core JavaScript -->
  <script type="text/javascript" src="js/mdb.min.js"></script>
  <!-- Your custom scripts (optional) -->
  <script type="text/javascript" src="script_ml.js"></script>
  <script type="text/javascript">
            // Animations initialization
            new WOW().init();
  </script>

</body>
</html>