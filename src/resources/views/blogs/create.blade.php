@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Create Blog') }}</div>

                <div class="card-body">
                    @include('partials.flash')

                    {!! Form::open(['url' => 'blogs','method' => 'post','enctype'=>'multipart/form-data']) !!}
                        @csrf
                        @include('blogs.fields')

                        <button type="submit" class="btn btn-primary mt-2">Submit</button>
                    {!! Form::close() !!}

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
