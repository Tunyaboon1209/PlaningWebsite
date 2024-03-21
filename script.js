//กดปุ่ม add เพื่อเปิดหน้าต่างรับข้อมูล
let addButton = document.querySelector('.main-add-button-content');
let inputBox = document.querySelector('.input-box');
let inputBoxContainer = document.querySelector('.input-box-container');
let closeInputBoxButton = document.querySelector('.close-button')

addButton.addEventListener('click', () => {
    inputBoxContainer.classList.remove('closed');
    addButton.classList.add('hide');
    closeInputBoxButton.classList.remove('hide')
});

// พรีวิวรูปภาพที่นำเข้า
let imageInput = document.querySelector('.input-image');
let imageInputIcon = document.querySelector('.add-image-icon')
let previewImageBox = document.querySelector('.preview-image');

function previewImage(event) {
    let inputedImage = event.target;
    if (inputedImage.files && inputedImage.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            previewImageBox.src = e.target.result;
            previewImageBox.classList.remove('hide');
            imageInputIcon.classList.add('hide');
            imageInputIcon.classList.remove('show');
        };

        reader.readAsDataURL(inputedImage.files[0]);
    }
}
imageInput.addEventListener('change', previewImage);

//กดปิดหน้าต่างรับข้อมูล
function closeInputBox(event) {
    addButton.classList.remove('hide');
    closeInputBoxButton.classList.add('hide');
    inputBoxContainer.classList.add('closed');
    inputPlan.reset();
    previewImageBox.classList.add('hide');
    previewImageBox.src = "";
    imageInputIcon.classList.remove('hide');
    imageInputIcon.classList.add('show');
};

closeInputBoxButton.addEventListener('click', closeInputBox);

//นำข้อมูลที่กรอกจาก input-box มาใส่ในหน้าต่างที่สร้างใหม่
let inputPlan = document.querySelector('.input-plan');
let flexbox = document.querySelector('.flexbox');
let dateInput = document.querySelector('.date-input');
let hour1Input = document.querySelector('#input-hour-1');
let hour2Input = document.querySelector('#input-hour-2');
let hour3Input = document.querySelector('#input-hour-3');
let hour4Input = document.querySelector('#input-hour-4');
let hour5Input = document.querySelector('#input-hour-5');
let minute1Input = document.querySelector('#input-minute-1');
let minute2Input = document.querySelector('#input-minute-2');
let minute3Input = document.querySelector('#input-minute-3');
let minute4Input = document.querySelector('#input-minute-4');
let minute5Input = document.querySelector('#input-minute-5');
let destination1Input = document.querySelector('#input-destination-1');
let destination2Input = document.querySelector('#input-destination-2');
let destination3Input = document.querySelector('#input-destination-3');
let destination4Input = document.querySelector('#input-destination-4');
let destination5Input = document.querySelector('#input-destination-5');

// ฟังก์ชั่น ลดความซ้ำซ้อนของการสร้างข้อมูลที่แสดงผลแต่ละบรรทัด เมื่อต้องการเรียกใช้ ให้เก็บค่าจากตัวแปรไว้ในตัวแปร
function createRow(hourInputId, minuteInputID, destinationInputId) {
    let hourInput = document.querySelector(`#${hourInputId}`);
    let minuteInput = document.querySelector(`#${minuteInputID}`);
    let destinationInput = document.querySelector(`#${destinationInputId}`);

    // สร้างกล่องครอบตัวแสดงคำตอบแต่ละบรรทัด
    let toGo = document.createElement('div');
    toGo.classList.add('to-go')

    // สร้าง hour
    let hour = document.createElement('p');
    hour.classList.add('hour');
    hour.innerHTML = hourInput.value + ':';

    // สร้าง minute
    let minute = document.createElement('p');
    minute.classList.add('minute');
    minute.innerHTML = minuteInput.value;

    // สร้าง destination
    let destination = document.createElement('p');
    destination.classList.add('destination');
    destination.innerHTML = destinationInput.value;

    toGo.append(hour, minute, destination);
    return toGo;
};

// สร้างฟังก์ชั่นในการสร้างข้อมูลภายในกล่อง
function creatBox(event) {
    event.preventDefault()

    if (dateInput.value.trim() === '') {
        //ตรวจสอบว่า ได้กรอกวันที่เข้ามาหรือไม่ หากไม่ได้พิมพ์ จะไม่สร้างกล่องขึ้นมา
        console.log('please input a date');
    } else {
        if (hour1Input.value.trim() === 'none') {
            console.log('please select a time');
        } else if (destination1Input.value.trim() === '') {
            console.log('please input a destination');
        } else if (imageInput.value === '') {
            console.log('please input an image');
            console.log(previewImageBox.value)
        } else {
            if (hour2Input.value !== 'none', destination2Input.value !== '') {
                // สร้างเงื่อนไขเพื่อตรวจสอบว่า มีการกรอกสถานที่ๆ จะไป ในบรรทัดที่ 2 หรือไม่
                if (hour3Input.value !== 'none', destination3Input.value !== '') {
                    // สร้างเงื่อนไขเพื่อตรวจสอบว่า มีการกรอกสถานที่ๆ จะไป ในบรรทัดที่ 3 หรือไม่
                    if (hour4Input.value !== 'none', destination4Input.value !== '') {
                        // สร้างเงื่อนไขเพื่อตรวจสอบว่า มีการกรอกสถานที่ๆ จะไป ในบรรทัดที่ 4 หรือไม่
                        if (hour5Input.value !== 'none', destination5Input.value !== '') {
                            // สร้างเงื่อนไขเพื่อตรวจสอบว่า มีการกรอกสถานที่ๆ จะไป ในบรรทัดที่ 5 หรือไม่

                            let item = document.createElement('div');
                            item.classList.add('item');

                            let mainContent = document.createElement('div');
                            mainContent.classList.add('main-content');

                            let detailBox = document.createElement('div');
                            detailBox.classList.add('detail-box');

                            let date = document.createElement('h3');
                            date.classList.add('date');
                            date.innerHTML = dateInput.value

                            let imageBox = document.createElement('div');
                            imageBox.classList.add('image-box');

                            let image = document.createElement('img');
                            image.classList.add('image')
                            image.src = previewImageBox.src;

                            let toGolist = document.createElement('div');
                            toGolist.classList.add('to-go-list');

                            let showBox1 = createRow('input-hour-1', 'input-minute-1', 'input-destination-1')
                            let showBox2 = createRow('input-hour-2', 'input-minute-2', 'input-destination-2')
                            let showBox3 = createRow('input-hour-3', 'input-minute-3', 'input-destination-3')
                            let showBox4 = createRow('input-hour-4', 'input-minute-4', 'input-destination-4')
                            let showBox5 = createRow('input-hour-5', 'input-minute-5', 'input-destination-5')

                            imageBox.append(image);
                            toGolist.append(date, showBox1, showBox2, showBox3, showBox4, showBox5)
                            detailBox.append(imageBox, toGolist);
                            mainContent.append(detailBox);
                            item.append(mainContent);
                            flexbox.append(item);

                            // close and reset form
                            addButton.classList.remove('hide');
                            closeInputBoxButton.classList.add('hide');
                            inputBoxContainer.classList.add('closed');
                            inputPlan.reset();
                            previewImageBox.classList.add('hide');
                            previewImageBox.src = "";
                            imageInputIcon.classList.remove('hide');
                            imageInputIcon.classList.add('show');
                        } else {
                            let item = document.createElement('div');
                            item.classList.add('item');

                            let mainContent = document.createElement('div');
                            mainContent.classList.add('main-content');

                            let detailBox = document.createElement('div');
                            detailBox.classList.add('detail-box');

                            let date = document.createElement('h3');
                            date.classList.add('date');
                            date.innerHTML = dateInput.value

                            let imageBox = document.createElement('div');
                            imageBox.classList.add('image-box');

                            let image = document.createElement('img');
                            image.classList.add('image')
                            image.src = previewImageBox.src;

                            let toGolist = document.createElement('div');
                            toGolist.classList.add('to-go-list');

                            let showBox1 = createRow('input-hour-1', 'input-minute-1', 'input-destination-1')
                            let showBox2 = createRow('input-hour-2', 'input-minute-2', 'input-destination-2')
                            let showBox3 = createRow('input-hour-3', 'input-minute-3', 'input-destination-3')
                            let showBox4 = createRow('input-hour-4', 'input-minute-4', 'input-destination-4')

                            imageBox.append(image);
                            toGolist.append(date, showBox1, showBox2, showBox3, showBox4)
                            detailBox.append(imageBox, toGolist);
                            mainContent.append(detailBox);
                            item.append(mainContent);
                            flexbox.append(item);

                            // close and reset form
                            addButton.classList.remove('hide');
                            closeInputBoxButton.classList.add('hide');
                            inputBoxContainer.classList.add('closed');
                            inputPlan.reset();
                            previewImageBox.classList.add('hide');
                            previewImageBox.src = "";
                            imageInputIcon.classList.remove('hide');
                            imageInputIcon.classList.add('show');
                        }
                    } else {
                        let item = document.createElement('div');
                        item.classList.add('item');

                        let mainContent = document.createElement('div');
                        mainContent.classList.add('main-content');

                        let detailBox = document.createElement('div');
                        detailBox.classList.add('detail-box');

                        let date = document.createElement('h3');
                        date.classList.add('date');
                        date.innerHTML = dateInput.value

                        let imageBox = document.createElement('div');
                        imageBox.classList.add('image-box');

                        let image = document.createElement('img');
                        image.classList.add('image')
                        image.src = previewImageBox.src;

                        let toGolist = document.createElement('div');
                        toGolist.classList.add('to-go-list');

                        let showBox1 = createRow('input-hour-1', 'input-minute-1', 'input-destination-1')
                        let showBox2 = createRow('input-hour-2', 'input-minute-2', 'input-destination-2')
                        let showBox3 = createRow('input-hour-3', 'input-minute-3', 'input-destination-3')

                        imageBox.append(image);
                        toGolist.append(date, showBox1, showBox2, showBox3)
                        detailBox.append(imageBox, toGolist);
                        mainContent.append(detailBox);
                        item.append(mainContent);
                        flexbox.append(item);

                        // close and reset form
                        addButton.classList.remove('hide');
                        closeInputBoxButton.classList.add('hide');
                        inputBoxContainer.classList.add('closed');
                        inputPlan.reset();
                        previewImageBox.classList.add('hide');
                        previewImageBox.src = "";
                        imageInputIcon.classList.remove('hide');
                        imageInputIcon.classList.add('show');
                    }
                } else {
                    let item = document.createElement('div');
                    item.classList.add('item');

                    let mainContent = document.createElement('div');
                    mainContent.classList.add('main-content');

                    let detailBox = document.createElement('div');
                    detailBox.classList.add('detail-box');

                    let date = document.createElement('h3');
                    date.classList.add('date');
                    date.innerHTML = dateInput.value

                    let imageBox = document.createElement('div');
                    imageBox.classList.add('image-box');

                    let image = document.createElement('img');
                    image.classList.add('image')
                    image.src = previewImageBox.src;

                    let toGolist = document.createElement('div');
                    toGolist.classList.add('to-go-list');

                    let showBox1 = createRow('input-hour-1', 'input-minute-1', 'input-destination-1')
                    let showBox2 = createRow('input-hour-2', 'input-minute-2', 'input-destination-2')

                    imageBox.append(image);
                    toGolist.append(date, showBox1, showBox2)
                    detailBox.append(imageBox, toGolist);
                    mainContent.append(detailBox);
                    item.append(mainContent);
                    flexbox.append(item);

                    // close and reset form
                    addButton.classList.remove('hide');
                    closeInputBoxButton.classList.add('hide');
                    inputBoxContainer.classList.add('closed');
                    inputPlan.reset();
                    previewImageBox.classList.add('hide');
                    previewImageBox.src = "";
                    imageInputIcon.classList.remove('hide');
                    imageInputIcon.classList.add('show');
                }
            } else {
                // ถ้ามีการกรอกเวลาและสถานที่แค่ 1 ช่อง ให้ทำตามนี้
                let item = document.createElement('div');
                item.classList.add('item');

                let mainContent = document.createElement('div');
                mainContent.classList.add('main-content');

                let detailBox = document.createElement('div');
                detailBox.classList.add('detail-box');

                let date = document.createElement('h3');
                date.classList.add('date');
                date.innerHTML = dateInput.value

                let imageBox = document.createElement('div');
                imageBox.classList.add('image-box');

                let image = document.createElement('img');
                image.classList.add('image')
                image.src = previewImageBox.src;

                let toGolist = document.createElement('div');
                toGolist.classList.add('to-go-list');

                let showBox1 = createRow('input-hour-1', 'input-minute-1', 'input-destination-1')

                imageBox.append(image);
                toGolist.append(date, showBox1)
                detailBox.append(imageBox, toGolist);
                mainContent.append(detailBox);
                item.append(mainContent);
                flexbox.append(item);

                // close and reset form
                addButton.classList.remove('hide');
                closeInputBoxButton.classList.add('hide');
                inputBoxContainer.classList.add('closed');
                inputPlan.reset();
                previewImageBox.classList.add('hide');
                previewImageBox.src = "";
                imageInputIcon.classList.remove('hide');
                imageInputIcon.classList.add('show');
            }
        }
    }
};

inputPlan.addEventListener('submit', creatBox);