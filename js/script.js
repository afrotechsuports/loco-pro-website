// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 5000); // 5-second delay
});

// Dynamic File Loading
const files = [
    { name: 'File 1', path: 'files/file1.txt', desc: 'Description for File 1' },
    { name: 'File 2', path: 'files/file2.txt', desc: 'Description for File 2' },
    { name: 'File 3', path: 'files/file3.txt', desc: 'Description for File 3' },
    { name: 'File 4', path: 'files/file4.txt', desc: 'Description for File 4' },
    { name: 'File 5', path: 'files/file5.txt', desc: 'Description for File 5' },
    { name: 'File 6', path: 'files/file6.txt', desc: 'Description for File 6' },
    { name: 'File 7', path: 'files/file7.txt', desc: 'Description for File 7' },
    { name: 'File 8', path: 'files/file8.txt', desc: 'Description for File 8' },
    { name: 'File 9', path: 'files/file9.txt', desc: 'Description for File 9' },
    { name: 'File 10', path: 'files/file10.txt', desc: 'Description for File 10' },
];

const productList = document.getElementById('product-list');
let visibleFiles = 4;

function loadFiles() {
    productList.innerHTML = '';
    files.slice(0, visibleFiles).forEach(file => {
        const product = document.createElement('div');
        product.classList.add('product');
        product.innerHTML = `
            <h3>${file.name}</h3>
            <p>${file.desc}</p>
            <a href="${file.path}" download class="download-btn">Download 📂🍪</a>
        `;
        productList.appendChild(product);
    });
}

loadFiles();

// Show More Button
document.querySelector('.show-more')
