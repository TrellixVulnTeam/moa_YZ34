@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Edit Blog') }}</div>

                <div class="card-body">
                    @include('partials.flash')

                    {!! Form::model($blog,['route' => ["blogs.update",$blog->id],'method' => 'post','enctype'=>'multipart/form-data']) !!}
                        @csrf
                        @method('PUT')
                        @include('blogs.fields')

                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                    {!! Form::close() !!}

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
