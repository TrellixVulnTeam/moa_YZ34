<div class="form-group mt-3">
  <label for="">Slug</label>
  {!! Form::text('slug', null, ['class' => 'form-control']) !!}
</div>
<div class="form-group mt-3">
  <label for="">Title</label>
  {!! Form::text('title', null, ['class' => 'form-control']) !!}
</div>

<div class="form-group mt-3">
  <label for="">Body</label>
  {!! Form::textarea('body', null, ['class' => 'form-control','id'=>'body','cols'=>20,'rows'=>20]) !!}
</div>
<div class="form-group mt-3">
  <label for="">Meta Title</label>
  {!! Form::text('meta_title', null, ['class' => 'form-control']) !!}
</div>
<div class="form-group mt-3">
  <label for="">Meta Description</label>
  {!! Form::textarea('meta_description', null, ['class' => 'form-control','cols'=>20,'rows'=>5]) !!}
</div>
<div class="form-group mt-3">
  <label for="formFile" class="form-label">Uplod Image</label>
  <input class="form-control" type="file" name="image" id="formFile">
</div>

<script src="https://cdn.tiny.cloud/1/is9o8c6qf8ydp0j98x44afip4n1ihy0yud5om7vg2etwwywx/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
<script>
tinymce.init({
  selector: '#body',
  plugins: 'a11ychecker advcode casechange export formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
  toolbar: 'a11ycheck addcomment showcomments casechange checklist code export formatpainter pageembed permanentpen table',
  toolbar_mode: 'floating',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author name',
});
</script>
