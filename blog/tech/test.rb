# # WHAT IS A BLOCK
# a block is an arbitrary piece of code that usually performs some operation

# x = [1,2,3,4]

# x.length.times { |x| puts x }


# WHAT IS A PROC
# A Proc is a Procedure, an Object in ruby, that you pass a block into.

# def test(num1)
#   return Proc.new { |x| x.times { |y| puts "y is #{y}" }}
# end

# happy = test(0)

# happy.call(5)

#  print "\n"
#  happy.call(7)


# WHAT IS A LAMBDA
# a lambda is a proc with strict rules about parameters.

# test = lambda {|x, y, z| puts z.class }
# test.call(1, 2, 3)
# test.call(4, 5)

def test_method(my_proc)
my_proc.call
end

 test_method lambda { puts "started"; return}
 test_method lambda {puts "ended"; return}
 test_method lambda {puts "restarted"; return}




