    import React, { useState } from 'react';

    // let kucing = '';

    function CatButton() {
        const [kucing, setKucing] = useState('');
        function buttonKucingHandler() {
            // console.log(increment);
            setKucing('Ini Adalah Kucing');
        }

        return (
            <>
                <div>
                    <button onClick={buttonKucingHandler}>Button</button>
                    <div>{kucing}</div>
                </div>
            </>
        );
    }

    export default CatButton;