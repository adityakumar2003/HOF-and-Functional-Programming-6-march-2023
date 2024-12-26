const powerTwo = (n) => {
    return n ** 2
}

function powerCube(powerTwo, n){
    return powerTwo(n) * n
}

// console.log(powerCube(powerTwo, 3));

function sayHello(){
    return () => {
        console.log("Hello Hitesh");
    }
}

let guessValue = sayHello()
// console.log(guessValue);

// guessValue()


const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m + n + p
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(2)(3)(4))

```
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

#define MAX 10

typedef struct stack{
int arr[MAX];
int top;
}stack;

void push(stack *);
int pop(stack *);
void display(stack *);

void main()
{
stack s;
int i,n;
clrscr();
s.top=-1;
fflush(stdin);
printf("\nEnter nmber of elements to insert:");

scanf("%d",&n);
	for(i=1;i<=n;i++)
	{
	push(&s);
	}
display(&s);
n=pop(&s);
printf("\nValue poped:%d",n);
display(&s);
getch();
}

void push(stack *A)
{
int v;
	if(A->top==MAX-1)
	{
	printf("\nstack is full");
	return;
	}
	printf("\nEnter value:");
	scanf("%d",&v);
	A->top++;
	A->arr[A->top]=v;
}


void main 

int i;
if(A->top==-1)
	{
	printf("\nStack Underflow. . . . . . ");
	return;
	}
   for(i=A->top;i>=0;i--)
   {
   printf("|%d|\n",A->arr[i]);
   }
}


//part 1 
//part 3

void display(stack *A)
{
int i;
if(A->top==-1)
	{
	printf("\nStack Underflow. . . . . . ");
	return;
	}
   for(i=A->top;i>=0;i--)
   {
   printf("|%d|\n",A->arr[i]);
   }
}

int pop(stack *A)
{
int n;
if(A->top==-1)
	{
	 printf("\nStack Underflow. . . . . . ");
	 exit(0);
	}
n=A->arr[A->top];
A->top=A->top-1;
return n;
}
```




const myNums = [2, 3, 4, 5]

const sumArray = arr => {
    let total = 0
    arr.forEach(function(element){
        total += element
    });
    return total
}

// console.log(sumArray(myNums));

function oneMoreHello(){
    console.log("Hello hitesh ! ", Math.random());
}

setInterval(oneMoreHello, 1000)

// setTimeout(oneMoreHello, 2000)