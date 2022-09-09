import React, {lazy, Suspense} from 'react';
import '../App.css'

// Lazy with timeout
const FakeMan = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./RealMan')), 3000);
    })
})
export function ReactLazyOther() {
    return (
        <div>
            <br/>
            <Suspense fallback={<div id="loading1">Đang chờ...</div>}>
                <div>
                    <FakeMan />
                </div>
            </Suspense>
            <br/>
        </div>
    );
}