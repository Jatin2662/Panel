import React, { useState } from 'react';

function PdfConverter() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setError('');
    };

    const handleConvert = () => {
        if (file) {
            // Perform the file conversion logic here
            const convertedContent = convertFile(file); // This function simulates the conversion
            downloadFile(convertedContent, 'converted-file.txt'); // Download the converted file
        } else {
            setError('No file selected');
        }
    };

    const convertFile = (file) => {
        // Simulate file conversion logic
        // Here we're just converting the file content to a string
        // In a real application, you'd implement the actual conversion logic
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const content = reader.result;
            // Perform any necessary conversion on the content
            // For demonstration, we'll just return the same content
            return content;
        };
    };

    const downloadFile = (content, fileName) => {
        const element = document.createElement('a');
        const file = new Blob([content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = fileName;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        document.body.removeChild(element);
    };

    return (
        <section className="pdf-converter">
            <div className="error">{error}</div>

            <div>
                <input 
                    type="file" 
                    accept="*" 
                    onChange={handleFileChange} 
                    required 
                />
            </div>
            <div>
                <button className="play" onClick={handleConvert}>Convert</button>
            </div>
        </section>
    );
}

export default PdfConverter;



// import React, { useState } from 'react';

// function PdfConverter() {
//     const [file, setFile] = useState(null);

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleConvert = () => {
//         if (file) {
//             // Perform the file conversion logic here
//             console.log('Converting file:', file.name);
//         } else {
//             console.log('No file selected');
//         }
//     };

//     return (
//         <section className="pdf-converter">
//             <div>
//                 <input 
//                     type="file" 
//                     accept="*" 
//                     onChange={handleFileChange} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <button onClick={handleConvert}>Convert</button>
//             </div>
//         </section>
//     );
// }

// export default PdfConverter;
