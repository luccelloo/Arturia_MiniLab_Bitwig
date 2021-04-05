const DEVICE_MEMORY = [
    "F0  00  20  6B  7F  42  02  00  01  0A  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  0A  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  0A  71  F7",
    "F0  00  20  6B  7F  42  02  00  04  0A  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  0A  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  0A  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  70  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  70  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  70  24  F7",
    "F0  00  20  6B  7F  42  02  00  04  70  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  70  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  70  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  71  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  71  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  71  25  F7",
    "F0  00  20  6B  7F  42  02  00  04  71  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  71  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  71  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  72  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  72  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  72  26  F7",
    "F0  00  20  6B  7F  42  02  00  04  72  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  72  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  72  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  73  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  73  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  73  27  F7",
    "F0  00  20  6B  7F  42  02  00  04  73  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  73  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  73  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  74  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  74  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  74  28  F7",
    "F0  00  20  6B  7F  42  02  00  04  74  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  74  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  74  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  75  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  75  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  75  29  F7",
    "F0  00  20  6B  7F  42  02  00  04  75  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  75  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  75  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  76  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  76  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  76  2A  F7",
    "F0  00  20  6B  7F  42  02  00  04  76  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  76  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  76  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  77  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  77  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  77  2B  F7",
    "F0  00  20  6B  7F  42  02  00  04  77  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  77  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  77  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  0B  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  0B  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  0B  6A  F7",
    "F0  00  20  6B  7F  42  02  00  04  0B  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  0B  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  0B  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  78  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  78  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  78  2C  F7",
    "F0  00  20  6B  7F  42  02  00  04  78  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  78  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  78  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  79  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  79  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  79  2D  F7",
    "F0  00  20  6B  7F  42  02  00  04  79  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  79  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  79  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  7A  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  7A  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  7A  2E  F7",
    "F0  00  20  6B  7F  42  02  00  04  7A  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  7A  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  7A  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  7B  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  7B  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  7B  2F  F7",
    "F0  00  20  6B  7F  42  02  00  04  7B  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  7B  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  7B  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  7C  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  7C  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  7C  30  F7",
    "F0  00  20  6B  7F  42  02  00  04  7C  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  7C  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  7C  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  7D  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  7D  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  7D  31  F7",
    "F0  00  20  6B  7F  42  02  00  04  7D  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  7D  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  7D  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  7E  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  7E  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  7E  32  F7",
    "F0  00  20  6B  7F  42  02  00  04  7E  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  7E  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  7E  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  7F  09  F7",
    "F0  00  20  6B  7F  42  02  00  02  7F  09  F7",
    "F0  00  20  6B  7F  42  02  00  03  7F  33  F7",
    "F0  00  20  6B  7F  42  02  00  04  7F  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  7F  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  7F  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  0C  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  0C  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  0C  6B  F7",
    "F0  00  20  6B  7F  42  02  00  04  0C  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  0C  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  0C  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  0D  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  0D  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  0D  6C  F7",
    "F0  00  20  6B  7F  42  02  00  04  0D  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  0D  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  0D  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  0E  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  0E  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  0E  6D  F7",
    "F0  00  20  6B  7F  42  02  00  04  0E  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  0E  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  0E  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  01  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  01  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  01  67  F7",
    "F0  00  20  6B  7F  42  02  00  04  01  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  01  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  01  01  F7",
    "F0  00  20  6B  7F  42  02  00  41  01  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  02  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  02  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  02  68  F7",
    "F0  00  20  6B  7F  42  02  00  04  02  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  02  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  02  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  03  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  03  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  03  6F  F7",
    "F0  00  20  6B  7F  42  02  00  04  03  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  03  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  03  01  F7",
    "F0  00  20  6B  7F  42  02  00  41  03  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  30  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  30  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  30  66  F7",
    "F0  00  20  6B  7F  42  02  00  04  30  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  30  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  30  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  04  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  04  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  04  70  F7",
    "F0  00  20  6B  7F  42  02  00  04  04  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  04  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  04  01  F7",
    "F0  00  20  6B  7F  42  02  00  41  04  00  F7",
    "F0  00  20  6B  7F  42  02  00  01  33  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  33  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  33  6E  F7",
    "F0  00  20  6B  7F  42  02  00  04  33  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  33  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  33  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  05  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  05  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  05  72  F7",
    "F0  00  20  6B  7F  42  02  00  04  05  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  05  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  05  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  40  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  40  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  40  01  F7",
    "F0  00  20  6B  7F  42  02  00  04  40  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  40  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  40  00  F7",
    "F0  00  20  6B  7F  42  02  00  01  41  0C  F7",
    "F0  00  20  6B  7F  42  02  00  02  41  41  F7",
    "F0  00  20  6B  7F  42  02  00  06  41  00  F7",
    "F0  00  20  6B  7F  42  02  00  01  06  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  06  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  06  73  F7",
    "F0  00  20  6B  7F  42  02  00  04  06  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  06  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  06  01  F7",
    "F0  00  20  6B  7F  42  02  00  40  06  00  F7",
    "F0  00  20  6B  7F  42  02  00  01  07  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  07  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  07  74  F7",
    "F0  00  20  6B  7F  42  02  00  04  07  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  07  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  07  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  50  08  F7",
    "F0  00  20  6B  7F  42  02  00  02  50  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  50  40  F7",
    "F0  00  20  6B  7F  42  02  00  04  50  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  50  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  50  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  08  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  08  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  08  75  F7",
    "F0  00  20  6B  7F  42  02  00  04  08  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  08  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  08  01  F7",
    "F0  00  20  6B  7F  42  02  00  01  09  01  F7",
    "F0  00  20  6B  7F  42  02  00  02  09  41  F7",
    "F0  00  20  6B  7F  42  02  00  03  09  69  F7",
    "F0  00  20  6B  7F  42  02  00  04  09  00  F7",
    "F0  00  20  6B  7F  42  02  00  05  09  7F  F7",
    "F0  00  20  6B  7F  42  02  00  06  09  01  F7",
    "F0  00  20  6B  7F  42  06  00  F7"
];