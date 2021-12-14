function commonChar(s1, s2) {
    let counter = 0;

    const arr1 = s1.split('');
    const arr2 = s2.split('');
    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);

  