import React, { useState, useEffect } from "react";
import "./Menu.scss"; // File CSS riêng (xem phần 2)
import HeaderMenu from '../../components/layout/menuheader'
import Footer from "../../components/Footer/Footer";

const Menu = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);

    // Hiệu ứng loading tiến độ
    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingProgress((prev) => (prev >= 100 ? 0 : prev + 10));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <HeaderMenu />
            <div className="coming-soon-container"
                style={{
                    paddingTop: '100px',
                    paddingBottom: '60px',
                }}>
                {/* Phiên bản 1: Minimalist */}
                <div className="minimalist-version">
                    <h1>Menu đang phát triển ✨</h1>
                    <p>Chúng tôi sẽ sớm triển khai. Hãy quay lại sau!</p>
                    <div className="loading-bar">
                        <div
                            className="progress"
                            style={{ width: `${loadingProgress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Phiên bản 2: Under Construction */}
                <div className="construction-version">
                    <div className="construction-icon">🚧</div>
                    <h2>Menu đang được nâng cấp</h2>
                    <p>Sắp ra mắt những món ngon bất ngờ!</p>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Menu;