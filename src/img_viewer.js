import '../style/img_viewer.css'
import big from '../assets/img1.jpg'
import small from '../assets/img2.jpg'

export default () => {
    const img1 = document.createElement('img');
    img1.src = big
    document.body.appendChild(img1);
    
    const img2 = document.createElement('img');
    img2.src = small
    document.body.appendChild(img2);
}