var bs_temp = [31.7, 31.7, 31.7, 31.7, 31.7, 31.7, 31.7, 31.7, 31.7, 31.8, 31.8, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 32, 32, 32.1, 32.1, 32.1, 32.2, 32.2, 31.3, 31.8, 31.4, 31.2, 32.6, 32, 32, 32, 32, 32, 32.1, 32, 32, 32, 32, 32.1, 32.1, 32, 32, 32, 32, 32, 32, 32, 32, 32.1, 32, 32.1, 32, 32, 32, 32.1, 32, 32, 32, 32, 32, 31.9, 32, 32, 32, 32, 32, 32.1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 31.9, 32, 31.9, 32, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 31.9, 32, 32, 32.1, 32, 31.9, 32, 32, 32, 32, 32, 31.9, 32, 32.1, 32, 32, 32, 32, 32, 32.1, 32, 32, 32, 32, 32, 31.9, 32, 31.9, 32.1, 31.9, 32, 31.9, 32.1, 32, 32, 32, 32, 32.1, 32, 32, 31.9, 32, 32, 31.9, 32, 32, 32, 31.9, 32, 32, 32, 32, 32, 32, 32.1, 32, 32.1, 32, 32, 32.1, 32.1, 32.1, 32, 32, 32, 32, 32, 32.1, 32.1, 32, 32, 32.1, 32, 32.2, 32.1, 32.1, 32, 32, 32.2, 32.1, 32, 32, 32.1, 32.1, 32.1, 32.1, 32.2, 32.1, 32.1, 32.2];

var bs_hum = [72.9, 72.8, 72.7, 72.8, 72.7, 72.6, 72.7, 72.5, 72.5, 72.3, 72.3, 72.3, 72.2, 72.1, 72, 72, 71.9, 71.9, 71.7, 71.5, 71.6, 71.5, 71.4, 71.3, 71.2, 83.3, 82.3, 82.3, 69.5, 79.4, 79.9, 79.6, 79.4, 79.6, 79.6, 79.6, 79.6, 79.6, 79.4, 79.4, 79.4, 79.2, 79.4, 79.2, 79.6, 79.4, 79.4, 79.6, 79.2, 79.6, 67.9, 79.2, 79.6, 79.6, 79.6, 79.7, 79.4, 79.6, 79.6, 79.6, 79.6, 79.6, 79.5, 79.6, 79.4, 79.6, 79.4, 79.2, 79.6, 79.6, 79.6, 79.6, 79.6, 79.6, 79.2, 79.6, 79.4, 79.6, 79.6, 79.2, 79.4, 79.6, 79.6, 79.7, 79.6, 79.7, 79.6, 79.7, 79.7, 79.7, 79.5, 79.7, 80, 79.8, 79.8, 79.7, 79.7, 79.8, 80.3, 80, 79.7, 80.3, 79.8, 80, 80, 80, 79.4, 79.6, 79.7, 79.6, 79.8, 79.4, 79.4, 79.7, 79.6, 79.6, 79.7, 79.4, 79.6, 79.6, 79.2, 79.6, 79.6, 79.6, 79.4, 79.6, 79.6, 79.4, 79.6, 79.6, 79.7, 79.7, 80, 79.6, 79.7, 79.6, 79.8, 79.6, 79.4, 79.6, 79.2, 79.6, 79.4, 79.6, 79.4, 79.7, 79.2, 79.6, 80, 79.6, 79.6, 79.7, 79.8, 79.7, 79.7, 79.4, 79.6, 79.6, 79.2, 79.6, 79.6, 79.4, 79.6, 79.4, 79.6, 79.6, 79.4, 79.4, 79.6, 79.6, 79.6, 79.6, 79.6, 79.2, 79.6, 79.2, 79.4, 79.6, 78.9, 79.4, 79.2, 78.9, 79.1, 79.2, 79.2, 79.1, 79.2, 79.4, 78.9, 79.1, 78.9, 79.2, 78.9, 79.1, 78.9];

var bs_mq135 = [65, 65, 65, 65, 66, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 111, 110, 110, 124, 124, 126, 126, 126, 125, 125, 125, 124, 124, 124, 126, 125, 125, 125, 125, 125, 127, 126, 126, 125, 142, 140, 136, 138, 136, 133, 131, 131, 130, 130, 131, 129, 129, 129, 128, 128, 127, 129, 127, 128, 127, 128, 128, 127, 127, 127, 126, 127, 127, 126, 126, 127, 126, 125, 126, 126, 126, 126, 126, 126, 125, 125, 125, 125, 124, 125, 125, 125, 125, 125, 125, 124, 125, 125, 124, 125, 124, 125, 124, 124, 124, 124, 125, 125, 125, 125, 124, 124, 124, 125, 125, 124, 124, 123, 124, 125, 124, 124, 124, 124, 124, 124, 125, 123, 125, 124, 124, 124, 124, 125, 124, 124, 125, 123, 124, 125, 124, 124, 124, 124, 123, 125, 124, 124, 123, 124, 124, 125, 124, 124, 123, 124, 124, 123, 124, 123, 124, 123, 125, 123, 124, 123, 123, 124, 124, 124, 123, 123, 124, 123, 124, 124, 124, 123, 124, 124, 123, 124, 124, 123, 124, 123, 124, 123, 124, 124];

var bs_feel = [40.57, 40.53, 40.49, 40.53, 40.49, 40.46, 40.49, 40.42, 40.42, 40.65, 40.65, 40.96, 40.92, 40.88, 40.85, 40.85, 40.81, 40.81, 41.04, 40.96, 41.31, 41.27, 41.23, 41.5, 41.46, 43.16, 44.61, 43.13, 37.98, 46.32, 44.33, 44.2, 44.11, 44.2, 44.2, 44.56, 44.2, 44.2, 44.11, 44.11, 44.47, 44.39, 44.11, 44.03, 44.2, 44.11, 44.11, 44.2, 44.03, 44.2, 39.94, 44.03, 44.56, 44.2, 44.2, 44.24, 44.47, 44.2, 44.2, 44.2, 44.2, 44.2, 43.8, 44.2, 44.11, 44.2, 44.11, 44.03, 44.56, 44.2, 44.2, 44.2, 44.2, 44.2, 44.03, 44.2, 44.11, 44.2, 44.2, 44.03, 44.11, 44.2, 44.2, 43.88, 44.2, 43.88, 44.2, 43.88, 43.88, 43.88, 43.8, 43.88, 44.01, 43.92, 43.92, 43.88, 43.88, 43.92, 44.13, 44.01, 43.88, 44.13, 43.92, 44.01, 44.01, 44.01, 44.11, 44.2, 44.6, 44.2, 43.92, 44.11, 44.11, 44.24, 44.2, 44.2, 43.88, 44.11, 44.56, 44.2, 44.03, 44.2, 44.2, 44.2, 44.47, 44.2, 44.2, 44.11, 44.2, 44.2, 43.88, 44.24, 44.01, 44.56, 43.88, 44.2, 43.92, 44.56, 44.11, 44.2, 44.03, 44.2, 44.47, 44.2, 44.11, 43.88, 44.03, 44.2, 44.01, 44.2, 44.2, 44.24, 43.92, 44.24, 44.24, 44.11, 44.2, 44.2, 44.03, 44.56, 44.2, 44.47, 44.2, 44.11, 44.56, 44.56, 44.47, 44.11, 44.2, 44.2, 44.2, 44.2, 44.56, 44.39, 44.2, 44.03, 44.47, 44.2, 44.62, 44.47, 44.39, 43.9, 43.99, 44.75, 44.39, 43.99, 44.03, 44.47, 44.26, 44.34, 44.26, 44.75, 44.26, 44.34, 44.62];


var bs_feel = [40.57, 40.53, 40.49, 40.53, 40.49, 40.46, 40.49, 40.42, 40.42, 40.65, 40.65, 40.96, 40.92, 40.88, 40.85, 40.85, 40.81, 40.81, 41.04, 40.96, 41.31, 41.27, 41.23, 41.5, 41.46, 43.16, 44.61, 43.13, 37.98, 46.32, 44.33, 44.2, 44.11, 44.2, 44.2, 44.56, 44.2, 44.2, 44.11, 44.11, 44.47, 44.39, 44.11, 44.03, 44.2, 44.11, 44.11, 44.2, 44.03, 44.2, 39.94, 44.03, 44.56, 44.2, 44.2, 44.24, 44.47, 44.2, 44.2, 44.2, 44.2, 44.2, 43.8, 44.2, 44.11, 44.2, 44.11, 44.03, 44.56, 44.2, 44.2, 44.2, 44.2, 44.2, 44.03, 44.2, 44.11, 44.2, 44.2, 44.03, 44.11, 44.2, 44.2, 43.88, 44.2, 43.88, 44.2, 43.88, 43.88, 43.88, 43.8, 43.88, 44.01, 43.92, 43.92, 43.88, 43.88, 43.92, 44.13, 44.01, 43.88, 44.13, 43.92, 44.01, 44.01, 44.01, 44.11, 44.2, 44.6, 44.2, 43.92, 44.11, 44.11, 44.24, 44.2, 44.2, 43.88, 44.11, 44.56, 44.2, 44.03, 44.2, 44.2, 44.2, 44.47, 44.2, 44.2, 44.11, 44.2, 44.2, 43.88, 44.24, 44.01, 44.56, 43.88, 44.2, 43.92, 44.56, 44.11, 44.2, 44.03, 44.2, 44.47, 44.2, 44.11, 43.88, 44.03, 44.2, 44.01, 44.2, 44.2, 44.24, 43.92, 44.24, 44.24, 44.11, 44.2, 44.2, 44.03, 44.56, 44.2, 44.47, 44.2, 44.11, 44.56, 44.56, 44.47, 44.11, 44.2, 44.2, 44.2, 44.2, 44.56, 44.39, 44.2, 44.03, 44.47, 44.2, 44.62, 44.47, 44.39, 43.9, 43.99, 44.75, 44.39, 43.99, 44.03, 44.47, 44.26, 44.34, 44.26, 44.75, 44.26, 44.34, 44.62];



var bs_mq4 = [183, 183, 183, 183, 183, 182, 181, 182, 181, 181, 180, 180, 180, 179, 179, 179, 179, 179, 179, 179, 179, 178, 178, 178, 178, 294, 293, 292, 300, 300, 298, 300, 300, 299, 301, 299, 299, 300, 299, 300, 301, 299, 300, 300, 300, 299, 300, 299, 297, 314, 312, 310, 313, 310, 308, 308, 308, 309, 308, 307, 308, 309, 307, 307, 306, 306, 306, 306, 307, 306, 306, 306, 305, 305, 304, 306, 305, 305, 304, 305, 304, 304, 305, 304, 304, 304, 303, 303, 304, 303, 304, 303, 303, 303, 303, 304, 302, 302, 302, 302, 302, 302, 302, 302, 302, 303, 302, 302, 302, 302, 302, 301, 302, 301, 301, 302, 301, 301, 301, 301, 301, 301, 301, 301, 301, 302, 301, 301, 301, 301, 301, 300, 299, 300, 300, 301, 300, 300, 300, 300, 301, 300, 299, 300, 299, 300, 300, 300, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 298, 299, 299, 299, 299, 298, 298, 298, 299, 298, 298, 299, 298, 299, 299, 298, 298, 298, 297, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 297, 298, 297, 298, 297, 298, 298];


// plot2_temperature(bs_temp);
// plot2_humidity(bs_hum);  
// plot2_air_quality(bs_mq135);
// plot2_feels_like(bs_feel);
// plot3_aq_hum(bs_feel, bs_hum, bs_mq135);
// plot3_hum_temp(bs_feel, bs_temp, bs_hum);

const bs_obj = { bs_temp, bs_hum, bs_feel, bs_mq135, bs_mq4 };

// export { bs_temp, bs_hum, bs_feel, bs_mq135, bs_mq4 };
export { bs_obj };