
# Today I Learned by *[José Manuel Jacobo Urzúa]*

Ruby and Rails official documentation reading personal journal

## Week 1

### Thursday 23, July 2020 *[ruby on rails installation]*
Ruby on Rails is an open source web application framework written in the Ruby programming language, following the paradigm of the Model Vista Controller model.

The ruby ​​on rails page mentions that installing rails is as easy as putting 'gem install rails' in the console, but we must bear in mind that we use the ruby ​​language and a rubygems library manager.
In my case I am working with Linux ubuntu 18.04 LTS [Install](http://rubyonrails.org.es/instala.html)

### Thursday 24, July 2020 *[ruby array]*
The array in ruby ​​is the same as in other languages, it starts at 0, and when it comes to negatives like for example -1 this means the last value of your array.
To declare an array:

>ary = [1, "two", 3.0] #=> [1, "two", 3.0]
>ary = Array.new    #=> []
>Array.new(3)       #=> [nil, nil, nil]
>Array.new(3, true) #=> [true, true, true]

Elements in an array can be retrieved using the #[] method. It can take a single integer argument (a numeric index), a pair of arguments (start and length) or a range. Negative indices start counting from the end, with -1 being the last element.

>arr = [1, 2, 3, 4, 5, 6]
>arr[2]    #=> 3
>arr[100]  #=> nil
>arr[-3]   #=> 4
>arr[2, 3] #=> [3, 4, 5]
>arr[1..4] #=> [2, 3, 4, 5]
>arr[1..-3] #=> [2, 3, 4]