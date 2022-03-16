@foreach($slider_images as $slider_image)
<div class="img-cont col-md-4 m-4">
  <img src="{{ asset($slider_image->thumbnail_path) }}" class="gallery-img">
  <div class="overlay"></div>
  <form action="/slider-image/{{$slider_image->id}}" method="post" class="d-inline form-del">
    {{ csrf_field() }}
    @method('DELETE')
    <div class="view-btn"><button  class="btn btn-default btn-view" type="button"  data-file-path="{{ asset($slider_image->file_path) }}" data-name="{{ $slider_image->name }}"  data-bs-toggle="modal" data-bs-target="#imgModal"> View </button></div>
    <div class="del-btn"><button  class="btn btn-default" type="submit"> Delete </button></div>
  </form>
</div>
@endforeach
