function factorial(n) {
  for(let i = n; i > 1;)
  {
     n = n * --i
  }
  return (n >= 1) ? n : n + 1;
}
