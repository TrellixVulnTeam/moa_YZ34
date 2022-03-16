@if(session()->has('success'))
<div class="alert alert-primary">
  {{ session()->get('success') }}
</div>
@elseif(session()->has('error'))
<div class="alert alert-danger">
  {{ session()->get('error') }}
</div>
@endif
