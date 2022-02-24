const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Fuction){
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB})=>{
      getCLS(onPerfEntry);
      getFId(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;