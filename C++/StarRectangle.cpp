#include<iostream>
using namespace std;

// int main(){
//     int m ;
//     cout<<"Enter a number of rows : ";
//     cin>>m;
//     int n;
//     cout<<"Enter a number of columns : ";
//     cin>>n;

//     for(int i=1; i<=m; i++){
//         for(int j=1; j<=n; j++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
// }

// star Square

// int main(){
//     int m ;
//     cout<<"Enter a number of rows : ";
//     cin>>m;

//     for(int i=1; i<=m; i++){
//         for(int j=1; j<=m; j++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
// }

// number Square

// int main(){
//     int m ;
//     cout<<"Enter side of square  : ";
//     cin>>m;

//     for(int i=1; i<=m; i++){
//         for(int j=1; j<=m; j++){
//             cout<<i<<" ";
//         }
//         cout<<endl;
//     }
// }


// alphabet square 

int main(){
    int m ;
    cout<<"Enter side of square  : ";
    cin>>m;

    for(int i=1; i<=m; i++){
        for(int j=1; j<=m; j++){
            cout<<(char)(j+64)<<" ";
        }
        cout<<endl;
    }
}