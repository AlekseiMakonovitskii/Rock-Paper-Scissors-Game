const buttons = document.querySelectorAll('.circle-nav');
const choices = ['paper', 'rock', 'scissors'];
const icons = [`<svg width="752pt" height="752pt" version="1.1" viewBox="0 0 752 752" xmlns="http://www.w3.org/2000/svg" id="paperIcon" fill="#ECDBBA">
<path d="m507.41 500.69c0.96875-5.6289 0.85156-10.926-0.33203-15.902 7.3828-0.20703 14.785-0.54687 22.184-1.0508h0.078126c10.949-0.92578 20.027-5.4375 27.23-13.535 7.4453-8.3398 10.789-18.039 10.031-29.109-0.58594-8.7344-3.6055-16.34-9.0508-22.832 4.1367-0.56641 6.9336-1.1484 8.3984-1.7109l0.16406-0.078125c11.543-4.3047 20.379-11.75 26.496-22.336l0.085937-0.078125c6.7266-11.461 7.1836-23.875 1.3906-37.266v0.089843c-5.4023-13.617-17.117-21.879-35.145-24.785h0.16406c-2.6328-0.50391-5.5391-0.87891-8.7188-1.1484 0.76953-1.2031 1.4727-2.4883 2.1172-3.8359l0.085938-0.16406c4.4727-9.8594 4.9844-19.941 1.5508-30.246-0.03125-0.0625-0.058594-0.14844-0.089844-0.24219-3.7305-10.27-10.309-17.859-19.727-22.746h0.085938c-8.2148-4.668-19.707-6.3242-34.488-4.9727l-0.011719-0.085938c-10.734 0.875-55.219 10.625-133.46 29.266 0.22266-0.37891 0.4375-0.76172 0.65234-1.1406v0.085938c5.6406-9.5625 9.9609-20.074 12.961-31.555l-0.078126 0.085938c3.5742-12.812 2.3164-26.484-3.75-41-7.0508-17.234-20.254-24.633-39.629-22.18h-0.078125c-18.66 1.8359-30.719 14.203-36.199 37.098-3.4453 14.598-6.8711 24.27-10.277 29.023l-0.074219 0.085937c-3.7734 4.2852-9.9453 8.8516-18.512 13.695-0.050781 0.019531-0.10938 0.046875-0.16406 0.078125-12.254 6.6836-21.797 16.848-28.613 30.492v-0.085937c-2.0664 4.0273-3.8867 8.1523-5.4688 12.391-6.793-4.4062-12.719-6.3945-17.77-5.9453-16.859-0.66797-30.348 9.3086-40.438 29.918l0.078125-0.085938c-7.1094 14.039-11.73 29.609-13.859 46.723v0.085937c-2.0742 17.273-0.16797 34.613 5.7031 52.016l0.078125 0.085938c6.5781 20.512 23.102 31.199 49.566 32.039 1.4062 0.046875 2.7109-0.14062 3.9141-0.5625 22.441 39.484 67.395 50.762 134.84 33.836 33.98 11.062 69.016 18.316 105.1 21.766h0.078125c10.215 0.98047 19.512-1.875 27.883-8.5625 8.3984-6.7539 13.398-15.277 15.02-25.617zm-143.98-10.031c-2.1367-0.69922-4.2852-0.74609-6.4414-0.16406-66.285 17.355-106.69 3.0039-121.23-43.047-0.87891-2.9609-2.6641-5.1875-5.3828-6.6836-2.7305-1.4844-5.5898-1.7852-8.5547-0.90625-2.9688 0.875-5.1992 2.6641-6.6875 5.3828-1.4883 2.7305-1.7852 5.582-0.89844 8.5547 0.27734 1.0117 0.57813 2.0156 0.89844 3.0195-11.609-1.6875-19.242-7.1445-22.91-16.387l0.085937 0.085937c-4.7734-14.102-6.3516-28.156-4.7305-42.16 1.7773-14.406 5.6406-27.535 11.578-39.363l0.085937-0.089844c5.3477-10.926 12.082-16.719 20.223-17.371 2.8945 0.55859 6.75 2.8398 11.578 6.8555-0.28906 1.6523-0.52734 3.3086-0.73828 4.9688-0.38281 3.0781 0.37891 5.8398 2.2852 8.3125 1.9219 2.4453 4.4219 3.8633 7.5 4.2461 3.0781 0.38281 5.8555-0.375 8.3203-2.2891 2.4414-1.9141 3.8555-4.4141 4.2422-7.5 1.4609-11.922 4.832-23.012 10.109-33.266v-0.085937c4.668-9.3398 11.164-16.328 19.484-20.949l0.16406-0.085938c11.723-6.6133 20.039-12.98 24.945-19.074l0.085938-0.085937c5.2617-5.9375 10.184-18.633 14.762-38.074 2.7773-11.648 8.5156-18.312 17.203-19.973h0.085937c7.7617-1 13.113 1.8242 16.059 8.4805 3.9258 9.3867 4.8516 18.223 2.7695 26.5l-0.085938 0.078125c-2.4297 9.3984-5.9375 18.012-10.52 25.848v0.085938c-5.6289 9.6445-9.082 18.18-10.352 25.602-0.070313 0.22266-0.12109 0.4375-0.16406 0.65234-0.074218 0.42188-0.13281 0.86328-0.16406 1.3047-0.25391 3.5898-0.14062 10.305 0.32812 20.148v0.15625c0.28906 7.7344-2.1055 17.434-7.1719 29.105h-0.078125c-5.1562 11.414-15.023 20.684-29.598 27.801-2.7773 1.375-4.6836 3.5078-5.7031 6.4414-1.0273 2.9258-0.86328 5.7773 0.48828 8.5664 1.3633 2.7852 3.5156 4.6953 6.4414 5.7109 2.9102 1.0195 5.7617 0.86328 8.5625-0.49609 20.215-9.8398 33.723-22.852 40.516-39.051h-0.078125c6.8516-15.648 9.8945-28.719 9.1289-39.219v-0.15625c-0.16797-3.6211-0.28516-6.7461-0.33203-9.375 83.871-20.059 131.32-30.578 142.35-31.555v-0.085937c9.3555-0.82031 16.664 0.015625 21.934 2.5273h0.089844c4.1992 2.2539 7.1602 5.6719 8.8828 10.277 0.03125 0.078125 0.058594 0.15625 0.089844 0.23828 1.4531 4.5586 1.2031 9.0156-0.73828 13.371-0.027344 0.058594-0.058594 0.11719-0.085938 0.16797-1.9414 4-4.9844 6.7656-9.1289 8.3203l0.085937-0.089843c-6.7422 2.4414-13.539 4.6719-20.387 6.6875-0.20703 0.050781-0.42188 0.10938-0.64844 0.16406-1.0664 0.375-4.0352 1.2695-8.8867 2.6953-0.24609 0.035156-0.49609 0.09375-0.73828 0.16406-23.527 6.8633-54.914 13.25-94.168 19.16-3.082 0.45313-5.5586 1.9141-7.4141 4.3984-1.8398 2.5195-2.5195 5.3203-2.043 8.4023 0.44922 3.0508 1.9141 5.5 4.4062 7.3477 2.5 1.8242 5.2734 2.5117 8.3125 2.0352 40.359-6.0195 72.672-12.543 96.938-19.57 25.496-4.1406 44.434-5.1797 56.824-3.0977h0.16797c8.9414 1.4297 14.949 5.2422 18.016 11.414v0.078125c2.6797 6.1836 2.5938 11.918-0.24609 17.211l0.085937-0.089843c-3.4219 5.8867-8.3398 10.051-14.762 12.477-8.207 2.5977-59.52 6.1367-153.93 10.602-0.13672-0.011719-0.27344-0.011719-0.40625 0-3.0312 0.125-5.5898 1.3203-7.668 3.5898-2.0977 2.2734-3.1094 4.9375-3.0156 7.9922 0.10938 3.0742 1.2734 5.6836 3.5039 7.8242 2.2188 2.1172 4.8555 3.1523 7.9102 3.0938h0.41016c75.879-1.1953 115.83-1.8945 119.85-2.1172h0.15625c4.832-0.34375 9.0703 1.0117 12.719 4.0742l0.085937 0.078125c3.6797 3.2344 5.6875 7.2656 6.0312 12.078 0.33203 4.8047-1.1094 9.0156-4.3203 12.633-3.2109 3.6133-7.2617 5.6211-12.145 6.0312-7.6406 0.54297-15.277 0.91016-22.91 1.1406-5.4102 0.10156-10.988 0.15234-16.711 0.15625-0.53516-0.046874-1.0781-0.046874-1.6328 0-27.621-0.035156-59.328-1.9609-95.148-5.7891-3.0742-0.32812-5.8164 0.48828-8.2344 2.4453-2.4258 1.9375-3.8164 4.4453-4.1562 7.5-0.32812 3.0781 0.48828 5.8164 2.4453 8.2305 1.9375 2.4258 4.4414 3.8203 7.5039 4.1641 35.113 3.7578 66.395 5.7344 93.836 5.9531 0.046875 0.078125 0.10547 0.15625 0.16406 0.24609 2.3828 3.4141 3.1992 7.3359 2.4453 11.734v0.089843c-0.76953 4.668-3.0469 8.5195-6.8516 11.566-3.5625 2.8633-7.5039 4.1445-11.82 3.8398-35.457-3.4141-69.84-10.707-103.16-21.859z"/>
</svg>`, `<svg width="752pt" height="752pt" version="1.1" viewBox="0 0 752 752" xmlns="http://www.w3.org/2000/svg" id="rockIcon" fill="#ECDBBA">
<path d="m442.38 535.26c10.539-9.125 15.742-20.078 15.613-32.852v-1.0117c13.34-1.8242 25.605-6.7578 36.812-14.801l0.10547-0.10547c17.105-12.648 25.488-27.895 25.141-45.727-0.015626-4.2656-0.48438-8.4297-1.4219-12.477 1.5586-1.0117 3.2148-2.0938 4.9609-3.2344 0.20703-0.18359 0.41016-0.34766 0.60938-0.51172 11.293-7.8984 16.945-20.539 16.934-37.93 0.39844-9.6992-3.0117-19.57-10.234-29.605 3.4453-1.9883 6.7578-4.1836 9.9336-6.5898 1.6484-1.1562 3.543-2.6484 5.6758-4.4609 0.77734-0.67188 1.4883-1.4219 2.1328-2.2383 0.14844-0.19922 0.32031-0.4375 0.51172-0.71094 16.773-15.348 24.988-30.605 24.637-45.723 0.87891-15.656-7.1992-30.832-24.23-45.539l-0.10547-0.09375c-27.879-24.965-63.266-29.898-106.17-14.801-0.95312-1.0352-1.9297-2.082-2.9414-3.1484v0.10547c-21.816-22.758-45.816-34.02-71.996-33.773-18.484-0.5-39.512 8.8242-63.07 27.988l-0.10547 0.10547c-13.961 10.781-25.652 27.473-35.082 50.09-5.6875-3.0352-11.398-4.4219-17.137-4.1562-20.969-0.82422-37.734 11.57-50.301 37.219l0.10547-0.10547c-8.8359 17.602-14.582 36.973-17.234 58.102v0.09375c-2.5664 21.484-0.20703 43.117 7.0977 64.895l0.10547 0.10547c7.5977 23.73 25.891 36.871 54.855 39.445 2.9609 5.8164 6.8203 11.902 11.562 18.254l0.10156 0.10547c16.324 23.285 43.766 31.703 82.336 25.246 2.8242 3.2148 6.0742 6.4609 9.7383 9.7383v0.10547c16.098 14.438 32.824 21.434 50.195 20.988h0.19922c17.781-0.34766 31.266-4.6094 40.461-12.781 0.054687-0.085938 0.12891-0.14844 0.20312-0.21094zm-37.215-108.7c0.19922 0.11719 0.39844 0.25391 0.60547 0.40625 1.3594 0.80469 2.7109 1.625 4.0586 2.4297 10.102 6.082 20.75 10.375 31.934 12.875 8.1562 1.8359 16.539 2.7461 25.148 2.7344 8.7578-0.003906 17.137-1.1875 25.148-3.5469-0.57812 8.6016-5.1445 16.074-13.691 22.41l-0.10547 0.10547c-9.5703 6.8359-20.316 10.25-32.246 10.238-14.145-0.003907-27.332-3.7305-39.551-11.148l0.10547 0.09375c-12.422-7.7305-18.812-17.695-19.164-29.914-0.003906-4.8984 1.5469-8.5469 4.6641-10.945h0.20703c1.3633-0.875 2.8828-1.5586 4.5625-2.0312 2.5352 2.168 5.3164 4.2656 8.3242 6.293zm38.934-59.824c0.5625 0.16797 1.1055 0.30078 1.625 0.40625 1.4844 0.26953 2.9727 0.53516 4.4609 0.80469l-0.71094-0.19922c11.07 2.6367 22.23 3.582 33.461 2.8359h0.10156c6.7266-0.39062 13.453-1.3633 20.184-2.9414 6.1367 6.6133 9.4453 12.934 9.9414 18.961-0.011718 6.6094-1.7305 11.641-5.1719 15.113l-0.30859 0.30469c-0.10547 0.0625-0.19922 0.13281-0.30469 0.20703-1.8789 1.2109-3.6367 2.3984-5.2734 3.5508h-0.10156c-1.8594 1.3164-3.582 2.5039-5.1719 3.5469-0.16406 0.085937-0.33203 0.18359-0.50391 0.30469-0.79297 0.30859-1.5742 0.71484-2.332 1.2148-0.54688 0.16797-1.0898 0.36328-1.625 0.60547-7.8828 3.7305-16.363 5.5938-25.453 5.5781-6.5234-0.011719-12.883-0.72266-19.062-2.1211-8.2734-1.832-16.148-4.9727-23.625-9.4336-1.3477-0.80859-2.6992-1.625-4.0586-2.4375-3.5977-2.5195-6.6406-5.2266-9.125-8.1094v0.10547c-5.0625-6.0234-7.5938-12.883-7.6055-20.59 0.003906-5.2031 1.7617-9.0547 5.2773-11.555v-0.10547c4.5234-2.5156 10.414-3.7617 17.645-3.7461 5.0898 3.043 11.004 5.6055 17.738 7.6992zm87.008-93.895 0.10156 0.10547c9.2773 7.9883 14.145 15.965 14.602 23.922-0.75391 8.3398-6.125 17.023-16.121 26.062-0.45703 0.44141-0.89453 0.92187-1.3164 1.4219-0.35938 0.4375-0.69922 0.84375-1.0117 1.2227-0.92578 0.74609-1.7695 1.3828-2.5312 1.9258-0.16797 0.14062-0.33594 0.27734-0.51172 0.40625-5.2773 4.0586-11.125 7.3047-17.543 9.7383-2.1211 0.61719-4.2852 1.2266-6.4883 1.8203-6.3203 1.7539-12.641 2.793-18.965 3.1484h-0.10156c-8.4766 0.60156-16.895-0.078125-25.254-2.0312-0.23828-0.070312-0.48047-0.13281-0.71094-0.19922-1.2227-0.22656-2.4414-0.45703-3.6523-0.71094-1.2109-0.39062-2.3984-0.78906-3.5469-1.2227 4.6641-2.5664 8.7148-6.1133 12.164-10.645 0.058594-0.10547 0.12109-0.20703 0.21094-0.30078 4.4922-5.9883 7.4023-13.191 8.7148-21.594 2.7852 1.1562 6.8398 2.9141 12.172 5.2656 3.5664 1.582 7.1445 1.6836 10.75 0.30859 3.5781-1.4062 6.1445-3.8672 7.7031-7.4102 1.5898-3.5586 1.6875-7.1367 0.30859-10.75-1.4102-3.5742-3.8711-6.1406-7.4023-7.6992-12.359-5.4883-19.832-8.3984-22.41-8.7227-0.4375-0.050782-0.87891-0.085938-1.3164-0.10547-0.52734-0.046875-1.0312-0.078125-1.5195-0.10547-0.074219-0.24219-0.13672-0.48438-0.20703-0.70703-0.03125-0.15625-0.070312-0.32812-0.10547-0.50391-1.4961-4.832-3.625-9.6992-6.3867-14.605 28.027-7.8086 51.48-3.8281 70.375 11.965zm-249.45 202.59-0.10547-0.10547c-10.598-14.301-14.246-25.789-10.957-34.477 1.8164-3.4219 2.1562-6.9727 1.0156-10.645-1.125-3.6992-3.3906-6.4688-6.793-8.3086-3.4102-1.8164-6.9609-2.1523-10.645-1.0117-3.6953 1.1328-6.4688 3.3984-8.3125 6.7891-3.1484 5.0625-4.9727 10.535-5.4727 16.43-10.434-3.0977-17.531-9.375-21.297-18.863l0.10156 0.10547c-5.9375-17.66-7.8945-35.199-5.8828-52.621v-0.10547c2.2266-17.77 7.0312-34.062 14.402-48.879l0.10156-0.09375c6.6523-13.59 15.027-20.797 25.148-21.602 2.4727 0.33203 5.0039 1.4805 7.6055 3.4453-2.0508 7.1133-3.9453 14.613-5.6758 22.512-0.80859 3.7617-0.16797 7.2812 1.9258 10.547 2.0742 3.2852 4.9766 5.3398 8.7188 6.1875 3.7695 0.81641 7.2812 0.17188 10.547-1.9258 3.2734-2.0781 5.3359-4.9727 6.1836-8.7227 8.9648-40.953 22.453-69.008 40.461-84.16l0.10547-0.10547c17.227-14.027 32.41-21.301 45.527-21.801 18.711 0.28516 35.945 8.668 51.715 25.152 2.7695 2.875 5.2773 5.75 7.5039 8.6211 0.070312 0.09375 0.13281 0.19922 0.19922 0.30078 0.28516 0.39453 0.58594 0.76953 0.91406 1.1172 5.5625 7.0898 9.4453 14.023 11.66 20.785l-0.10547-0.50391c0.66406 2.3398 1.1719 4.6719 1.5195 6.9922-0.011719 0.18359-0.011719 0.34766 0 0.51172 0.11719 1.2695 0.1875 2.582 0.20703 3.9531-0.003907 6.5039-1.4258 11.883-4.2617 16.117l0.19922-0.19922c-2.4414 3.2109-5.8867 4.7305-10.34 4.5625-2.0352 0.027344-4-0.21484-5.8828-0.71094l-0.30469-0.10547h-0.10547c-4.1797-1.4219-8.0977-3.9922-11.762-7.6992h-0.10156c-9.0078-8.918-15.566-15.312-19.676-19.176-0.56641-1.332-1.3828-2.5742-2.4297-3.7461-2.3984-2.6641-5.3711-4.1836-8.9258-4.5625-3.5664-0.39453-6.8086 0.44141-9.7344 2.5352-2.8984 2.1211-4.7266 4.9297-5.4766 8.4141-1.4609 5-0.68359 11.785 2.332 20.387l0.10547 0.20703c1.4883 4.0625 2.332 7.0352 2.5352 8.918-0.26953 8.7148-3.8398 17.738-10.75 27.078l-0.10547 0.09375c-6.5078 8.5469-13.238 13.523-20.18 14.906-3.8047 0.51172-6.8789 2.3047-9.2305 5.3711-2.375 3.0742-3.3242 6.5195-2.8359 10.344 0.51172 3.8047 2.3008 6.8789 5.3711 9.2305 3.0742 2.3672 6.5195 3.3203 10.352 2.8359 12.336-1.1562 23.988-8.1523 34.98-20.984-0.20703 1.832-0.30859 3.7188-0.30859 5.6719 0 8.0391 1.4453 15.574 4.3633 22.617-1 0.56641-1.9805 1.1836-2.9453 1.8242-11.625 7.0781-17.434 18.527-17.438 34.371-0.019531 1.5469 0.011719 3.0664 0.10547 4.5625-8.8984 1.2031-16.469 5.7305-22.711 13.59l-0.10156 0.10156c-6.625 7.9727-9.9336 18.039-9.9414 30.219-0.046875 3.043 0.25781 6.082 0.91016 9.125-20.738 1.6211-36.09-3.5234-46.023-15.418zm119.45 44.82c-10.684-0.23047-21.059-4.8672-31.137-13.898v0.10547c-4.4531-4.0625-8-8.0547-10.645-11.961l-0.19922-0.30859c-0.17187-0.25781-0.34375-0.49609-0.51172-0.71094-2.4453-3.9531-3.7305-7.8711-3.8516-11.762-0.003906-5.0664 1.2422-9.3047 3.7578-12.672l0.10156-0.10547c1.7031-2.1641 3.8047-3.3164 6.2891-3.4453 0.63281-0.011719 1.1406-0.011719 1.5195 0 0.22656 0.089844 0.46484 0.1875 0.71094 0.30078 0.79297 0.40625 1.6094 0.74219 2.4375 1.0156 5.3008 7.4766 12.703 14.172 22.207 20.078l0.10547 0.09375c11.707 7.1094 24.078 11.738 37.113 13.898 0.32031 0.48047 0.69531 0.94531 1.1172 1.4219l-0.10156 0.10547c-0.13281 4.4453-2.0273 8.293-5.6836 11.555-5.3672 3.9727-13.039 6.0664-23.016 6.293h-0.21484z"/>
</svg>`, `<svg id="scissorsIcon" width="752pt" height="752pt" version="1.1" viewBox="0 0 752 752" xmlns="http://www.w3.org/2000/svg" fill="#ECDBBA">
<path d="m170.73 419.17c6.957 21.723 24.449 33.031 52.488 33.918 0.88281 0.03125 1.7461-0.027344 2.5781-0.17188 2.4062 3.6484 5.25 7.1562 8.5508 10.539 12.312 12.738 26.785 19.07 43.422 18.984 1.6836 0.035156 4.3672-0.25391 8.0234-0.85938 1.8516-0.30078 3.0312-0.47266 3.5469-0.51953h0.94531c2.9688 5.5352 7.1406 11.082 12.52 16.66l0.085937 0.085938c12.938 13.488 27.012 20.102 42.219 19.855 13.277-0.058593 24.898-3.7617 34.871-11.133 11.473-8.4336 16.996-18.242 16.582-29.438v-0.60547c14.523-0.48438 27.758-4.3672 39.711-11.648l0.089844-0.09375c15.98-10.023 23.727-22.254 23.223-36.688 0.09375-4.9844-0.71094-9.7812-2.4219-14.422 14.195 2.6641 28.699 4.957 43.512 6.9102 30.605 4.0156 51.383 5.1602 62.328 3.4531 0.058594-0.03125 0.11719-0.0625 0.17188-0.089844 14.195-2.1992 25.105-10.113 32.719-23.738l-0.089844 0.085937c8.0312-13.418 7.8633-28.578-0.51953-45.496-6.7734-16.645-28.699-26.34-65.781-29.09-0.42969-0.035156-0.86719-0.0625-1.293-0.089844 25.91-7.9922 41.68-18.043 47.305-30.125l0.089844-0.089843c9.0508-16.832 10.281-30.387 3.7148-40.652-5.3516-9.9414-13.375-16.781-24.086-20.547h0.16797c-9.1172-3.3984-19.5-4.8945-31.168-4.4883h-0.17188c-10.594 0.09375-31.773 5.5938-63.527 16.48-24.867 8.5156-45.5 16.801-61.902 24.867-4.0898-7.3398-9.793-14.812-17.09-22.441-18.57-19.391-39.004-28.961-61.293-28.75-15.766-0.41406-33.688 7.5039-53.781 23.742-11.902 9.2383-21.848 23.48-29.879 42.727-4.8398-2.5195-9.7031-3.6719-14.582-3.4531-17.824-0.68359-32.156 9.8711-42.992 31.684-7.3672 14.961-12.176 31.426-14.418 49.383-2.3008 18.352-0.25781 36.766 6.1328 55.254zm174.64 45.832h0.09375c8.0664 4.2266 16.527 7.2969 25.375 9.2461 0.48438 0.98828 1.1094 1.9453 1.8984 2.8477-0.41016 3.7617-2.7148 7.1836-6.9102 10.277-5.918 4.3633-12.816 6.5156-20.723 6.4727-8.9297-0.24609-17.273-4.4219-25.035-12.523l-0.078124-0.082031c-7.1719-7.4336-10.945-14.688-11.312-21.766 0-4.2422 1.0586-7.8359 3.1953-10.793l0.085938-0.085938c1.457-1.7578 3.2344-2.6719 5.3555-2.7578 0.98828-0.003906 1.6484-0.003906 1.9844 0 0.10547 0.019531 0.18359 0.050781 0.26953 0.089844h-0.34766c1.3477 0.66406 2.7031 1.0664 4.0586 1.2031 4.9766 6.7617 12.344 12.715 22.09 17.871zm-144.94-139.93c5.7461-11.598 12.938-17.727 21.586-18.395 2.1055 0.28516 4.2656 1.2617 6.4727 2.9375-1.7461 6.0508-3.3633 12.445-4.8398 19.168-0.6875 3.1992-0.14063 6.1953 1.6484 8.9766 1.7695 2.7891 4.2461 4.5469 7.418 5.2656 3.2031 0.69531 6.2109 0.14844 8.9805-1.6367 2.7852-1.7695 4.543-4.2461 5.2734-7.4297 7.6445-34.914 19.16-58.883 34.523-71.906 14.676-11.852 27.594-17.98 38.766-18.395 15.918 0.24219 30.594 7.3789 44.027 21.41v-0.089843c8.5195 8.9102 14.246 17.516 17.176 25.809 0.03125 0.089844 0.0625 0.17188 0.09375 0.25781 0.89453 3.1992 1.3672 6.3945 1.3789 9.582 0 5.4844-1.1836 9.9648-3.5352 13.473-2.0664 2.6719-4.9844 3.9414-8.7227 3.793-5.6406-0.14062-10.793-2.5039-15.449-7.0703-7.582-7.5156-13.133-12.922-16.66-16.234-0.47266-1.2227-1.2031-2.3789-2.1562-3.457-2.0469-2.2695-4.582-3.5586-7.5938-3.8828-3.043-0.33594-5.8086 0.38281-8.293 2.1562-2.4688 1.8086-4.0195 4.1992-4.6562 7.168-1.2617 4.2031-0.625 10.02 1.8906 17.434 0.074219 0.078126 0.12109 0.16797 0.17188 0.26172 1.2734 3.4609 1.9961 5.9922 2.1562 7.5938-0.21484 7.418-3.3203 15.102-9.3203 23.055-5.5195 7.2734-11.277 11.523-17.266 12.777-3.2148 0.47266-5.8164 2.0273-7.7734 4.6641-2.0039 2.6562-2.7734 5.625-2.332 8.8945 0.47266 3.2148 2.0273 5.8086 4.668 7.7734 2.6641 1.9961 5.6211 2.7734 8.8867 2.3242 11.734-1.2773 22.676-8.6523 32.805-22.102 7.0508-9.3203 11.48-18.477 13.285-27.453 8.3984 6.7422 17.605 10.051 27.625 9.9297 11.871-0.11719 21.137-4.5469 27.801-13.293l0.09375-0.17188c5.4609-7.082 8.2031-16.297 8.2031-27.625 0.003906-2.2383-0.10938-4.4844-0.34375-6.7305 16.016-8.1133 36.648-16.484 61.898-25.121 28.379-9.7617 47.195-14.855 56.457-15.285h0.16797c8.3047-0.27344 15.695 0.76172 22.191 3.1094h0.17188c4.9375 1.7578 8.6562 4.9297 11.129 9.4961 1.5117 4.4297 0.21094 10.441-3.8789 18.043l0.089843-0.078126c-6.1523 9.2461-23.359 17.129-51.625 23.648l0.089844-0.085938c-33.371 7.5625-64.824 15.93-94.363 25.121-2.9414 0.92578-5.1836 2.7422-6.7305 5.4375-1.5781 2.6953-2.0352 5.5469-1.3828 8.5469 0.70703 3.0117 2.3398 5.3945 4.9297 7.1719 2.5312 1.793 5.3242 2.4844 8.3711 2.0664 45.609-6.418 83.57-8.5703 113.86-6.4727 25.133 1.8594 40.496 7.125 46.105 15.797 4.2773 8.6523 4.6875 16.375 1.2031 23.227l-0.089844 0.085937c-3.6641 6.6406-8.8789 10.582-15.621 11.828l0.16797-0.09375c-9.7656 1.2852-28.363 0.13281-55.766-3.4453-28.301-3.7188-55.461-8.7188-81.488-15.02-2.4219-0.79297-4.9531-1.3984-7.6055-1.8164-0.21484-0.035156-0.41016-0.0625-0.59375-0.089844-1.0625-0.10937-2.1875-0.23047-3.3711-0.34375-3.2617-0.34375-6.1758 0.51953-8.7188 2.5898-2.543 2.082-3.9883 4.7656-4.3086 8.0312-0.34375 3.2578 0.51953 6.168 2.582 8.707 2.0938 2.5508 4.7734 3.9883 8.0312 4.3203 0.89844 0.09375 1.7617 0.18359 2.5898 0.26172 0.19922 0.035156 0.39844 0.0625 0.60547 0.089843 0.95703 0.18359 1.9062 0.41016 2.8477 0.6875 0.26172 0.11719 0.54687 0.23047 0.86328 0.34375 4.2617 1.4805 8.3125 3.9297 12.172 7.3398l0.089844 0.089844c5.2891 4.8633 8.0469 10.188 8.2891 15.969-0.5 6.2773-4.4922 11.77-12.004 16.492l0.09375-0.089844c-9.0781 5.5508-19.199 8.3086-30.387 8.2891-13.316 0.027344-25.641-2.9102-36.945-8.8086h0.085938c-10.871-5.75-16.598-13.008-17.176-21.754-0.09375-3.293 1.2422-5.6836 3.9688-7.1719l-0.085938 0.09375c4-1.957 9.207-2.9375 15.621-2.9375 2.2188 0.26953 6.8867 1.7617 13.988 4.4883 0.085938 0.03125 0.16406 0.070313 0.25781 0.085938 6.8984 2.8359 11.07 4.7031 12.52 5.6094 2.5 2.1719 5.3711 3.1523 8.6367 2.9375 3.2617-0.24609 5.9688-1.6328 8.1133-4.1367 2.1797-2.4961 3.1523-5.3711 2.9414-8.6367-0.26172-3.2578-1.6484-5.9609-4.1445-8.1133-1.9805-2.0742-8.4297-5.3516-19.344-9.8398-0.09375-0.027343-0.17188-0.050781-0.25781-0.089843-11.406-4.3711-18.969-6.4102-22.699-6.1289-11.078-0.011718-20.031 1.8906-26.848 5.6992l-0.09375 0.089844c-10.812 5.8516-16.27 15.148-16.402 27.879-8.8086 0.38281-16.207 4.2773-22.18 11.656l-0.09375 0.09375c-5.293 6.5156-8.1094 14.484-8.457 23.906-0.85156 0.10938-1.832 0.25781-2.9414 0.42969h-0.085938c-1.8633 0.31641-3.2148 0.48828-4.0586 0.51953-10.062-0.078125-18.84-3.9922-26.332-11.734-7.2344-7.4102-11.117-15.812-11.645-25.203-0.16406-3.293-1.457-6.0469-3.8945-8.2891-2.4258-2.2305-5.2812-3.2617-8.5391-3.1094-3.2891 0.15234-6.0508 1.4453-8.2812 3.8789-2.2305 2.4297-3.2695 5.2773-3.1133 8.5469 0.085938 1.9961 0.25781 3.9531 0.51562 5.8789-11.746-1.9141-19.516-7.6445-23.301-17.18-5.1289-14.906-6.7617-29.746-4.9375-44.543 1.8867-15.207 5.9414-29.137 12.152-41.797z"/>
</svg>`];
const playerChoiceDisplay = document.querySelector('.player');
const computerChoiceDisplay = document.querySelector('.computer');
const resultDisplay = document.querySelector('.result');
const resultConditions = ['WIN', 'LOSE', 'DRAW'];
const statisticCounters = document.querySelectorAll('.statCounter');
const colors = ['#C84B31', '#4d6da1'];
const displayType = window.navigator.maxTouchPoints;

let userChoice;
let computerChoice;
let currentId;
let win = 0;
let lose = 0;
let draw = 0;

const setDefaultIcons = () => {
	computerChoiceDisplay.innerHTML = icons[0];
	playerChoiceDisplay.innerHTML = icons[0];
	resultDisplay.innerHTML ='DRAW';
	resultDisplay.style.color = '#ECDBBA';
	playerChoiceDisplay.style.fill = colors[1];
}

const getUserChoice = (e) => {
	currentId = e.currentTarget.id;
	const selectedElements = choices.indexOf(currentId);
	playerChoiceDisplay.innerHTML = icons[selectedElements];
	userChoice = choices[selectedElements];
}

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	computerChoiceDisplay.innerHTML = icons[randomNumber];
	computerChoice = choices[randomNumber];
}

const getResult = () => {
	if (computerChoice === userChoice) {
		resultDisplay.innerHTML = resultConditions[2];
		resultDisplay.style.color = '#ECDBBA';
		draw++;
	}

	if (computerChoice === choices[0] && userChoice === choices[1]) {
		resultDisplay.innerHTML = resultConditions[1];
		resultDisplay.style.color = colors[0];
		lose++;
	}

	if (computerChoice === choices[1] && userChoice === choices[2]) {
		resultDisplay.innerHTML = resultConditions[1];
		resultDisplay.style.color = colors[0];
		lose++;
	}

	if (computerChoice === choices[2] && userChoice === choices[0]) {
		resultDisplay.innerHTML = resultConditions[1];
		resultDisplay.style.color = colors[0];
		lose++;
	}

	if (userChoice === choices[0] && computerChoice === choices[1]) {
		resultDisplay.innerHTML = resultConditions[0];
		resultDisplay.style.color = colors[1];
		win++;
	}

	if (userChoice === choices[1] && computerChoice === choices[2]) {
		resultDisplay.innerHTML = resultConditions[0];
		resultDisplay.style.color = colors[1];
		win++;
	}

	if (userChoice === choices[2] && computerChoice === choices[0]) {
		resultDisplay.innerHTML = resultConditions[0];
		resultDisplay.style.color = colors[1];
		win++;
	}
}

const renderStatistics = () => {
	statisticCounters[0].innerHTML = win;
	statisticCounters[1].innerHTML = draw;
	statisticCounters[2].innerHTML = lose;
}

const getRandomOverColor = (e) => {
	const randomNumber = Math.floor(Math.random() * 2);
	e.currentTarget.style.borderColor = colors[randomNumber];
}

const getRandomOutColor = (e) => {
	e.currentTarget.style.borderColor = '#ECDBBA';
}

const checkDisaplyNonSensetive= () => {
	if (displayType === 0) {
		buttons.forEach(el => el.addEventListener('mouseover', getRandomOverColor));
		buttons.forEach(el => el.addEventListener('mouseout', getRandomOutColor));
	}
}

const checkDisaplySensetive= () => {
	if (displayType === 1) {
		buttons.forEach(el => el.addEventListener('touchstart', getRandomOverColor));
		buttons.forEach(el => el.addEventListener('touchend', getRandomOutColor));
	}
}

const game = () => {
	setDefaultIcons();
	buttons.forEach(el => el.addEventListener('click', (e) => {
		getUserChoice(e);
		getComputerChoice();
		getResult();
		renderStatistics();
	}));

	checkDisaplyNonSensetive();
	checkDisaplySensetive();
}

game();
