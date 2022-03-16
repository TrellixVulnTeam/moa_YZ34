@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{ asset('css/jquery_upload.style.css') }}">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"></script>
<script src="http://malsup.github.com/jquery.form.js"></script>
<script type="text/javascript" src="{{ asset('js/jquery_upload.js') }}"></script>
<div class="container">
  <div class="row justify-content-center mt-5">
      @include('partials.flash')
    <div class="col-md-12">
      <button type="button" class="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Upload Image
      </button>
      <br>
      <div id="sliderImages" class="row text-center">
        @include('sliders.slider-images')
      </div>
    </div>
  </div>
</div>
<input type="hidden" id="sliderID" value="{{$slider_id}}">
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Choose Multiple Images to Upload</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form method="post" name="image_upload_form" id="image_upload_form" enctype="multipart/form-data" action="/slider/img-upload">
          @csrf
          <input type="hidden" name="slider_id" value="{{$slider_id}}">
          <label for="image_upload" class="form-label">Uplod Image</label>
          <input class="form-control" type="file" name="images_upload[]" id="image_upload" multiple >
        </form>
        <br>
        <div class="progress" style="display:none;">
          <div class="bar"></div >
          <div class="percent">0%</div >
        </div>
        <br><br>
        <div id="status"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="imgModal" tabindex="-1" aria-labelledby="imgModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img src="" alt="" class="img-fluid">
      </div>
    </div>
  </div>
</div>
@endsection
