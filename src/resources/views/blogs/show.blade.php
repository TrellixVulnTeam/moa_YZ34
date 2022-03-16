@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('View Blog') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <h2>{{$blog->title}}</h2>

                    <p>Published At: {{date('Y-m-d', strtotime($blog->created_at))}}</p>
                    <br>
                    <div>
                        {!! $blog->body !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
