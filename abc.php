 <?php

//	echo"Hello all";


// $x = 5 + /* 10 + */ 15;
// echo $x;


 /*
$x = 5;
$y = 6;

 $sum = $x + $y;
 // echo $x*3 +$y*4 + $sum;
 echo "The sum of ".$x." and ".$y." is ".$sum;
 echo "\nThe sum of ".$x." and ".$y." is ".($x+$y);
*/

// echo strlen("Raja kumar prasad");
// echo str_word_count("Raja kumar prasad");
// echo strrev("rajakumarprasad")
// echo strpos("Hi this is Raja","Raja");
// echo str_replace("Raja","Sagnik","Hi this is Raja");

/*
$ot = "Hi this is Raja";
$nt = str_replace("Raja","Sagnik",$ot);
echo $nt;
*/


/*

$a = 17;
$b = 25;
$c = 18;

if($a>$b && $a>$c){
	echo "a is Greatest";
}
elseif($b>$c){
	echo "B is Greatest";
}
else{
	echo "C is Greatest.";
}

*/

/*
$day = "Funday";

switch($day){
	case "Monday":
		echo "Pizza";
		break;
	case "Tuesday":
		echo "Mix-pakore";
		break;
	case "Wednesday":
		echo "Biryani";
		break;
	case "Thursday":
		echo "Samosa";
		break;
	case "Friday":
		echo "Kachori";
		break;
	case "Saturday":
		echo "Bread-Pakore";
		break;
	case "Sunday":
		echo "Golgappe";
		break;
	default:
		echo "Aaj Off Hai";	
}
*/

/*
$i = 1;
while($i<=10){
	echo $i;
	$i++;
}
*/


/*
$i = 1;
do{
	echo $i;
	$i++;
}while($i<=10);
*/

/*
for($i = 0; $i < 10; $i++){
  echo $i." ";
}
*/

/*
$num = array(1,2,3,4,5,6,7,8,9,10);

foreach($num as $x){
	echo $x;
}
*/

/*
function greet(){
	echo "Good Morning";
}

greet();

*/

/*
function sum($num1,$num2){
	return $num1+$num2;
}

$result = sum(12,13);
echo $result;
*/

/*
$person = array("ram","ranu","raju","raj","rozi","rani","rakhi");
$age = array(12,13,16,18,15,12,19,11,13,17);
//echo count($age);
//echo count($person);
echo $person[5];
*/

/*
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo "Ben is " . $age['Ben'] . " years old.";
*/


// $a = 15;
// $b = 17;
// $sum = $a+$b;
// echo "The Sum of ".$a." and ".$b." is " .$sum;

/*
$age = array(12,13,16,18,15,12,19,11,13,17);
echo "The Age of Fifth Child is ".$age[4];
*/

// php local and global variable


/*
$x =10;

function value()
{
	$y = 15;
	echo "\nInside Function y value is ".$y;
	
	global $x;
	$y =  $x + $y;
	echo "\n".$y;
}
value();
echo "\nOutside Function x value is ".$x;
*/


// $x = array(1,2,4,5,);
// $y = array('a','d','r','s');

/*
$n = array(1=>'a',2=>'d',4=>'r',5=>'s');

foreach($n as $x=>$y){
	echo "value ".$x. " letter ".$y."\n";
}
*/

/*

$arr = array(1,4,3,7,2,9);
sort($arr);
for($i = 0;$i< count($arr); $i++){
	echo $arr[$i]." ";
}

echo "\n";

$arr2 = array(1,4,3,7,2,9);
rsort($arr2);
for($i = 0;$i< count($arr2); $i++){
	echo $arr2[$i]." ";
}

$cars = array("Volvo", "BMW", "Toyota");
sort($cars);

for($i = 0;$i< count($cars); $i++){
	echo $cars[$i]." ";
	//echo "<br>";
}

*/

/*
$n = array(5=>'p',2=>'d',7=>'r',1=>'s');
//asort($n);		// value wise sorting
//ksort($n);			// Key wise sorting

// arsort($n);			// value wise reverse sorting
krsort($n);			// key wise reverse sorting

foreach($n as $num => $l){
	echo "Number : ".$num." Letter : ".$l."\n";
}
*/

/*
$x = 123;
echo var_dump(is_int($x));
echo var_dump(is_long($x));


$y = 123.45;
echo var_dump(is_long($y));
echo var_dump(is_float($y));
echo var_dump(is_double($y))."\n\n";

$z = 4.2e12345;
echo var_dump($z);
echo var_dump(is_infinite($z));

$p = "12345";
echo var_dump($p);
echo var_dump(is_numeric($p));
*/

/*
$x = 5985;
var_dump(is_numeric($x));

$x = "5985";
var_dump(is_numeric($x));

$x = "59.85" + 100;
echo $x."\n";
var_dump(is_numeric($x));

$x = "Hello";
var_dump(is_numeric($x));

*/

/*
$x = acos(8);
echo $x."\n";
echo var_dump(is_nan($x));
*/

/*
$dec  = 12.34;
echo var_dump(is_float($dec));
$num  = (int)$dec;
echo var_dump(is_float($num));
echo $num;

echo "\n\n";

$num = "123456";
$num2 = (int)$num;
echo var_dump(is_int($num2));
*/

/*

echo PHP_INT_MAX."\n";
echo PHP_INT_MIN."\n";
echo PHP_INT_SIZE."\n\n";
echo PHP_FLOAT_MAX."\n";
echo PHP_FLOAT_MIN."\n";
echo -PHP_FLOAT_MAX."\n";
echo -PHP_FLOAT_MIN."\n";
echo PHP_FLOAT_DIG."\n";
echo PHP_FLOAT_EPSILON."\n";

*/

// echo(pi());

//----------------------------------------------------------------------------

/*
class fruit{
	public $name;
	public $price;

	function set_name($name){
		$this->name = $name;
	}

	function get_name(){
		return $this->name;
	}

	function set_price($price){
		$this->price = $price;
	}

	function get_price(){
		return $this->price;
	}
}

$f1 = new fruit();
$f1->set_name("Apple");
$f1->set_price(100);
echo "The Fruit is : ".$f1->get_name();
echo "\n";
echo "Today's Price : ".$f1->get_price()." Rs./Kg";

echo "\n\n";

$f2 = new fruit();
$f2->set_name("Mango");
$f2->set_price(80);
echo "The Fruit is : ".$f2->get_name();
echo "\n";
echo "Today's Price : ".$f2->get_price()." Rs./Kg";

echo "\n\n";


echo $f1->name;
echo var_dump($f1 instanceof fruit);

*/

//----------------------------------------------------------------------------
/*
class person{
	public $name;
	public $age;

	function __construct($name, $age)			// parameterized contructor
	{
		$this->name = $name;
		$this->age = $age;
	}

	function get_name(){
		return $this->name;
	}

	function get_age(){
		return $this->age;
	}

	function __destruct()				// destructor function
	{
		echo "The Person is {$this->name} and he is {$this->age} years old.";
	}
}

$ram = new person('Ram Kumar',45);			
//echo $ram->get_name()." is ".$ram->get_age()." years old.";

*/

//----------------------------------------------------------------------------

/*
class vehicle{
	public $no_of_wheels;
	public $price;

	public function __construct($no_of_wheels,$price)
	{
		$this->no_of_wheels = $no_of_wheels;
		$this->price = $price;
	}

	public function intro(){
		echo "The Vehicle have {$this->no_of_wheels} and have price of {$this->price}";
	}
}

class car extends vehicle{
	public $brand_name;

	public function __construct($no_of_wheels,$price,$brand_name)	// constructor overriding
	{
		$this->no_of_wheels = $no_of_wheels;
		$this->price = $price;
		$this->brand_name = $brand_name;
	}

	public function intro(){										// method Overriding
		echo "The {$this->brand_name} Vehicle have {$this->no_of_wheels} wheels and have price of {$this->price}";
	}
	
}

$car1 = new car(4,800000,"Toyota");
$car1->intro();

*/

/*
//----------------- property - private, function - private
class Person{

	private $name;

	function __construct($name){
		$this->name = $name;
		$this->get_name_pub();
	}

	private function get_name_pub(){
		echo "The Name of Person in protected is {$this->name}";
	}
}

$p1 = new Person("Rajat");

*/


/*
//----------------- property - private, function - protected (insider)
class Person{

	private $name;

	function __construct($name){
		$this->name = $name;
		$this->get_name_pub();
	}

	protected function get_name_pub(){
		echo "The Name of Person in protected is {$this->name}";
	}
}

$p1 = new Person("Rajat");
*/


//----------------- property - private, function - protected (outsider)
class Person{

	private $name;

	function __construct($name){
		$this->name = $name;
		// $this->get_name_pub();
	}
	
	protected function get_name_pub(){
		echo "The Name of Person in protected is {$this->name}";
	}
}

class doctor extends Person{
	
	private $salary;
	
	function __construct($name,$salary){
		$this->name = $name;
		$this->salary = $salary;
	}

	function all_details(){
		echo "\nThe Name of Person in protected is {$this->name} and his salary is {$this->salary} \n";
	}


}

$p0 = new Person("Raja");
$p1 = new doctor("Rajat",3000);
$p1->all_details();



/*

//----------------- property - private, function - public
class Person{

	private $name;

	function __construct($name){
		$this->name = $name;
	}

	public function get_name_pub(){
		echo "The Name of Person in public is {$this->name}";
	}
}

$p1 = new Person("Raja");
$p1->get_name_pub();
*/





/*
class Person{

	public $name;
	protected $age;
	private $salary;

	function __construct($name,$age,$salary){
		$this->name = $name;
		$this->age = $age;
		$this->salary = $salary;
	}
	
	private function get_name_pri($name){
		echo "The Name of Person in public is {$this->name}";
	}

	public function get_name_pub($name){
		echo "The Name of Person in public is {$this->name}";
	}

	protected function get_name_pro($name){
		echo "The Name of Person in public is {$this->name}";
	}

	//-------------------------------------------

	private function get_age_pri($age){
		echo "The Age of person in public is {$this->age}";
	}

	public function get_age_pub($age){
		echo "The Age of person in public is {$this->age}";
	}

	protected function get_age_pro($age){
		echo "The Age of person in public is {$this->age}";
	}

	//----------------------------------------------

	private function get_sal_pri($salary){
		echo "The Salary of person in public is {$this->age}";
	}

	public function get_sal_pub($salary){
		echo "The Salary of person in public is {$this->age}";
	}

	protected function get_sal_pro($salary){
		echo "The Salary of person in public is {$this->age}";
	}
	
}

class Engineer extends Person{
	
	public $post;

	function doc_details(){
		// $str = get_age2();
		// echo $str;
	}
}
class Doctor extends Person{
	
	function pub(){
		
		// echo $str;
	}
}

$obj1 = new human();
$obj1->get_age(12);

*/

//----------------------------------------------------------------------------
/*
class Sal{
	const MESSAGE = "This Message for all.";
}

//--------------
class Sal{
	const NUM = 10000;

	function num_val(){
		echo self::NUM;
	}
}

// $firstgreet = new Sal();
// $firstgreet->num_val();

*/

















?>