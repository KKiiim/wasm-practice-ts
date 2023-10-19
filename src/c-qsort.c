void myqsort_helper(int *arr, int left, int right)
{
  if(left > right){
    return;
  }
  int tmp = arr[left];
  int i = left;
  int j = right;
  while(i != j){
    while(arr[j] >= tmp && j > i) j--;
    while(arr[i] <= tmp && j > i) i++;
    int t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  arr[left] = arr[i];
  arr[i] = tmp;

  myqsort(arr, left, i-1);
  myqsort(arr, i+1, right);
}

void myqsort(int *arr, int left, int right){
    myqsort_helper(arr, 1, 10);

}

int getter(int index){

}
