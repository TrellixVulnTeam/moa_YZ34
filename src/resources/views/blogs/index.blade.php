@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center mt-5">
        @include('partials.flash')
    <div class="col-md-12">
                <a href="blogs/create" class="btn btn-primary mb-2">Create Blog</a>
                <br>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Published At</th>
                            <th>Created at</th>
                            <th colspan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($blogs as $blog)
                        <tr>
                            <td>{{ $blog->id }}</td>
                            <td>{{ $blog->title }}</td>
                            <td>{{ ($blog->published_at) ? date('Y-m-d', strtotime($blog->published_at)) : '' }}</td>
                            <td>{{ date('Y-m-d', strtotime($blog->created_at)) }}</td>
                            <td>
                            <a href="blogs/{{$blog->id}}" class="btn btn-primary">Show</a>
                            <a href="blogs/{{$blog->id}}/edit" class="btn btn-primary">Edit</a>
                            <form action="blogs/{{$blog->id}}" method="post" class="d-inline">
                                {{ csrf_field() }}
                                @method('DELETE')
                                <button class="btn btn-danger" type="submit">Delete</button>
                            </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
    </div>
</div>
@endsection
