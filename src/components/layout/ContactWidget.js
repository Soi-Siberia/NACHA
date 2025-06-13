import React, { useState } from "react";
import "./ContactWidget.scss";

/**
 * Component ContactWidget
 * - Hiển thị widget liên hệ nổi với các lựa chọn như Zalo, Messenger, Điện thoại (mặc định giống ảnh mẫu)
 * - Nếu truyền props items: sẽ dùng items động đó
 * - Nếu không truyền: sử dụng items mặc định dưới đây
 *
 * Mặc định:
 *   1. Zalo - Chat Zalo - (8h00 - 22h00)
 *   2. Gọi điện - 18003355 - (8h00 - 22h00)
 *   3. Messenger - Messenger - (8h00 - 22h00)
 */

const defaultItems = [
    {
        icon: (
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
                alt="Zalo"
                style={{ width: 28, height: 28 }}
            />
        ),
        title: "Chat Zalo",
        subTitle: "Zalo",
        info: "(8h00 - 22h00)",
        href: "https://zalo.me/",
    },
    {
        icon: (
            // SVG điện thoại xanh lá tương tự mẫu
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#34c759" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" d="M6.63 10.79a15.093 15.093 0 006.58 6.58l2.2-2.2a1.01 1.01 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.59a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1H7.6a1 1 0 011 1c0 1.26.2 2.48.57 3.59.13.34.05.74-.24 1.02l-2.2 2.18z" /></svg>
        ),
        title: "18003355",
        subTitle: null,
        info: "(8h00 - 22h00)",
        href: "tel:18003355",
    },
    {
        icon: (
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/83/Facebook_Messenger_4_Logo.svg"
                alt="Messenger"
                style={{ width: 28, height: 28 }}
            />
        ),
        title: "Messenger",
        subTitle: null,
        info: "(8h00 - 22h00)",
        href: "https://m.me/",
    },
];

function ContactWidget({ items }) {
    const [open, setOpen] = useState(false);
    const displayItems = items && items.length ? items : defaultItems;

    // Ẩn hoặc hiện widget
    const handleToggle = () => setOpen((open) => !open);

    return (
        <div className="contact-widget__wrap">
            {/* Box chứa nội dung liên hệ */}
            {open && (
                <div className="contact-widget__box ">
                    {displayItems.map((item, idx) => (
                        <div className="contact-widget__item" key={idx}>
                            <span className="contact-widget__icon" >{item.icon} </span>
                            <div className="contact-widget__info">
                                <div className="contact-widget__title-row">
                                    {item.subTitle && (
                                        <span className="contact-widget__subtitle">{item.subTitle}</span>
                                    )}
                                    {item.href ? (
                                        <a
                                            className="contact-widget__title link"
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.title}
                                        </a>
                                    ) : (
                                        <span className="contact-widget__title">{item.title}</span>
                                    )}
                                </div>
                                {item.info && (
                                    <div className="contact-widget__desc">{item.info}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {/* Nút đóng/mở dạng vòng tròn đỏ với dấu X */}
            <button className="contact-widget__btn" onClick={handleToggle}>
                <span className="contact-widget__btn-x">
                    {open ? "✕" : "+"}
                </span>
            </button>
        </div>
    );
}

export default ContactWidget;
