<template>
<center>
	<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js">
</head>
<body>

<div class="container">
  <h2>Nike Admin</h2>
  <p></p>
  <div class="btn-group btn-group-justified">
    <a href="login" class="btn btn-primary">หน้าหลัก</a>
    <a href="users" class="btn btn-primary">ผู้ชาย</a>
    <a href="comments" class="btn btn-primary">ผู้หญิง</a>
	<a href="blogs" class="btn btn-primary">เด็ก</a>
    <a href="sport" class="btn btn-primary">กีฬา</a>
  </div>
</div>

</body>
  <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="1.jpg" target="_blank">
			<img src = "@/assets/1.png" style="width:75%">

          <div class="caption">
            <p>1</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="2.jpg" target="_blank">
          <img src="@/assets/2.png"  style="width:75%">
          <div class="caption">
            <p>2</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="3.jpg" target="_blank">
          <img src="@/assets/3.png"  style="width:75%">
          <div class="caption">
            <p>3</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</center>
</template>

