#include<iostream>
using namespace std;

int main(){
    int a,b,c;
    cout<<"Enter the vale of a : ";
    cin>>a;

    cout<<"Enter the vale of b : ";
    cin>>b;

    cout<<"Enter the value of c : ";
    cin>>c;

    if(a>b && a>c){
        cout<<"max value is a : "<<a<<endl;
    }else if(b>a && b>c){
        cout<<"max value is b : "<<b<<endl;
    }else{
        cout<<"max value is c : "<<c<<endl;
    }

    return 0;
}
