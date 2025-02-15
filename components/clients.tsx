export default function Clients() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="aos-init aos-animate animate-gradient-text nacelle-text ">
              Our customers span the globe
            </h2>
          </div>
          {/* Items */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {/* Item */}
            <div className="relative flex h-24 items-center justify-center rounded-2xl p-2 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <svg
                className="max-w-full fill-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                width={110}
                height={21}
                viewBox="0 0 110 21"
              >
                <path
                  d="M2.225 20.795H6.68v-10.4h2.972l.393-3.582H6.68l.006-1.794c0-.934.091-1.435 1.481-1.435h1.858V0H7.052c-3.57 0-4.826 1.738-4.826 4.661v2.152H0v3.583h2.225v10.399ZM42.152 9.838c-1.513 0-1.858.801-1.858 1.793v.557h3.714v-.557c0-.992-.345-1.793-1.856-1.793Zm14.478.362c-.908 0-1.563.287-2.226.58v6.622c.635.059 1 .059 1.603.059 2.18 0 2.48-.963 2.48-2.308V11.99c0-.993-.342-1.79-1.857-1.79Zm-41.295 7.724c-.847 0-1.23-.408-1.23-1.193 0-.789.413-.958 1.354-.958h1.987v1.571l-.19.085c-.581.262-1.1.495-1.92.495Zm55.38-7.724c-1.516 0-2.04.797-2.04 1.79v3.624c0 .995.524 1.795 2.04 1.795 1.51 0 2.04-.8 2.04-1.795V11.99c-.001-.993-.53-1.79-2.04-1.79ZM21.9 20.822H18.19l-.16-.906a8.76 8.76 0 0 1-4.206 1.053c-2.723 0-4.172-1.755-4.172-4.18 0-2.863 1.691-3.884 4.716-3.884h3.079v-.619c0-1.46-.174-1.89-2.503-1.89h-3.808l.372-3.583h4.162c5.11 0 6.232 1.558 6.232 5.502v8.507Zm8.539-10.629c1.111 0 1.774.084 4.084.466V7.166c-2.023-.44-3.341-.555-4.455-.555-4.782 0-6.682 2.43-6.682 5.937v2.51c0 3.504 1.9 5.93 6.682 5.93 1.114 0 2.432-.116 4.455-.553V16.94c-2.31.383-2.973.469-4.085.469-1.996 0-2.6-.427-2.6-2.062v-3.094c0-1.635.604-2.06 2.6-2.06Zm18.022 4.865h-8.167v.289c0 1.635.604 2.062 2.6 2.062 1.793 0 2.889-.086 5.194-.47v3.496c-2.224.437-3.382.552-5.564.552-4.782 0-6.684-2.425-6.684-5.93v-2.87c0-3.065 1.411-5.576 6.311-5.576s6.31 2.482 6.31 5.577v2.87Zm7.396 5.923c6.079 0 7.082-2.47 7.082-5.857v-3.492c0-3.095-.742-5.02-5.195-5.02-1.133 0-2.379.175-3.341.52V.36l-4.452.716v19.36c2.423.359 3.71.545 5.906.545Zm21.354-5.783c0 2.921-1.25 5.755-6.482 5.755-5.234 0-6.508-2.834-6.508-5.755v-2.821c0-2.923 1.274-5.757 6.508-5.757 5.232 0 6.482 2.834 6.482 5.757v2.82Zm7.78 5.755c5.231 0 6.483-2.834 6.483-5.755v-2.821c0-2.923-1.252-5.757-6.483-5.757-5.234 0-6.508 2.834-6.508 5.757v2.82c0 2.922 1.274 5.756 6.508 5.756Zm21.12-.158h-4.826l-4.082-6.573v6.573H92.75V1.076l4.454-.717v12.695l4.082-6.24h4.826l-4.456 6.81 4.456 7.17ZM82.939 11.99c0-.993.524-1.79 2.037-1.79 1.51 0 2.045.797 2.045 1.79v3.624c0 .995-.534 1.795-2.045 1.795-1.513 0-2.037-.8-2.037-1.795V11.99Zm25.714 6.352c.75 0 1.347.59 1.347 1.327 0 .748-.598 1.331-1.353 1.331-.751 0-1.361-.583-1.361-1.331 0-.737.61-1.327 1.361-1.327h.006Zm-1.104 1.327c0-.62.494-1.12 1.098-1.12h.006c.61 0 1.097.501 1.097 1.125 0 .625-.487 1.126-1.097 1.12-.61 0-1.104-.495-1.104-1.125Zm.842.772h-.244v-1.48l.012-.002c.124-.017.244-.033.422-.033.232 0 .383.047.477.112.09.065.138.165.138.306 0 .195-.133.312-.298.36v.011c.134.024.225.141.256.359.036.23.073.318.097.366h-.256c-.036-.048-.073-.183-.104-.378-.036-.188-.134-.259-.33-.259h-.169v.638h-.001Zm.177-.82h-.177v-.501a1.31 1.31 0 0 1 .177-.012c.275 0 .371.13.371.26 0 .182-.17.254-.371.254Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            {/* Item */}
            <div className="relative flex h-24 items-center justify-center rounded-2xl p-2 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <svg
                className="max-w-full fill-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                width={86}
                height={18}
                viewBox="0 0 86 18"
              >
                <path
                  d="M6.78 12.81c1.376 2.275 3.902 3.801 6.712 3.801 4.153 0 6.44-3.612 6.44-3.612l.294.962c-1.923 2.52-5.358 4.039-9.2 4.039-4.425 0-8.24-2.127-9.996-5.195A7.623 7.623 0 0 1 0 9c0-4.97 4.936-9 11.025-9 4.303 0 7.767 1.858 9.586 4.55l-7.22 4.357 4.12-6.377c-1.178-.747-2.624-1.447-4.12-1.447-4.227 0-7.708 3.555-7.708 7.815 0 1.428.402 2.769 1.096 3.911Zm19.33-.003a2.974 2.974 0 0 0-.032.439c0 1.617 1.3 2.928 2.905 2.928 1.605 0 2.905-1.31 2.905-2.928a2.913 2.913 0 0 0-2.905-2.928 2.913 2.913 0 0 0-2.873 2.489Zm12.225 4.9-1.444-4.902-2.152-7.303s-1.359-3.73-5.648-2.158c-4.29 1.573-5.257 2.158-5.257 2.158h5.814l1.38 4.649c-1.062-.945-2.615-1.541-4.346-1.541-3.049 0-5.547 1.85-5.775 4.195-.011.12-.017.236-.017.354 0 2.512 2.593 4.548 5.792 4.548 2.674 0 4.925-1.422 5.592-3.357l.995 3.357h5.066Zm14.75-4.902v4.902h-5.212V6.937a1.43 1.43 0 0 0-1.423-1.435c-.588 0-1.114.362-1.328.914v11.291h-5.115V5.502h-2.983s4.15-2.534 5.59-2.534c1.363 0 2.373 1.056 2.499 2.4.386-.21.772-.427 1.153-.643 1.597-.903 3.108-1.757 4.213-1.757a2.617 2.617 0 0 1 2.606 2.553v7.284Zm8.754 2.416-.725-2.416-2.191-7.304c.118-.952 1.05-1.872 2.028-1.872.987 0 1.8.75 1.907 1.717l2.165 7.46.616 2.123a1.926 1.926 0 0 1-1.905 2.156 1.891 1.891 0 0 1-1.895-1.864Zm7.57-2.415C68.42 15.823 65.601 18 62.278 18c-3.324 0-6.144-2.177-7.13-5.195a7.605 7.605 0 0 1-.377-2.37c0-4.178 3.36-7.565 7.507-7.565 4.145 0 7.505 3.387 7.505 7.565 0 .828-.132 1.625-.376 2.371Zm8.628 4.901V6.415c.213-.55.74-.914 1.327-.913a1.43 1.43 0 0 1 1.424 1.435v10.77H86V5.521a2.616 2.616 0 0 0-2.606-2.553c-1.105 0-2.616.854-4.213 1.757-.38.215-.766.434-1.153.644-.127-1.345-1.136-2.401-2.5-2.401-1.439 0-5.466 2.534-5.466 2.534h2.86v12.205h5.115Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            {/* Item */}
            <div className="relative flex h-24 items-center justify-center rounded-2xl p-2 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <svg
                className="max-w-full fill-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                width={94}
                height={39}
                viewBox="0 0 94 39"
              >
                <path
                  d="M31.475 8.291c3.2 2.624 7.351 7.097 6.831 12.246-.624 4.07-4.924 7.131-8.565 8.106-3.537 1.043-7.975.939-11.582.104l-.048.133c-.229.632-.488 1.346-1.2 1.607-.485.174-1.11.07-1.491-.244-.476-.446-.571-1.076-.665-1.694-.118-.78-.233-1.54-1.104-1.889-3.051-1.287-6.346-3.827-7.906-6.958-.208-.626.035-1.252.416-1.739 2.393-1.913 5.41-2.678 8.427-3.27.098.04.118-.021.143-.094.018-.056.04-.12.1-.15.025-.31.049-.623.072-.935.135-1.78.268-3.555.829-5.153a.54.54 0 0 1 .763-.174c1.18.904 1.284 2.3 1.39 3.704.065.865.13 1.732.448 2.489 3.64.173 7.282.347 10.16 2.4.97.8 1.207 2.328.9 3.201-.305.872-1.316 1.496-2.253 1.565h-.194c-.646.006-1.602.015-1.54-.417.027-.184.346-.412.693-.661.557-.4 1.187-.85.798-1.253-.902-.934-5.403-1.492-8.214-1.84l-.033-.004c-.346-.07-.664.035-.664.418-.012.44-.027.888-.043 1.341-.078 2.266-.16 4.648.216 6.765.035.174.243.383.416.416 4.959.801 10.195.348 14.079-2.504 1.803-1.46 2.393-3.514 2.08-5.775-1.56-6.297-8.114-10.09-13.489-12.524A37.822 37.822 0 0 0 4.011 2.342c-.988.073-2.554.415-2.565.766-.005.145.297.211.639.286.484.106 1.046.229.92.618-.213.664-2.028.27-2.565.105-.538-.166-.486-.94-.347-1.427C1.446.29 5.22.096 6.924.012c9.432-.244 18.552 3.36 24.55 8.28Zm15.812-4.035c.64.03 1.25.275 1.734.695.659.626.832 1.67.52 2.506-1.213 2.504-4.097 4.177-6.068 4.73-1.18.279-2.67.279-3.745-.139-.169.102-.329.276-.49.451-.336.367-.676.738-1.105.454-.52-.407-.492-.943-.465-1.477.02-.412.041-.824-.19-1.173-.047-.07-.123-.112-.206-.158-.113-.063-.238-.133-.318-.288-.729-1.6.173-3.131 1.178-4.349 1.677-1.876 6.485-3.966 9.155-1.252Zm-5.583 1.252c-.936.174-1.994.583-2.566 1.252-.572.67-.936 1.323-.589 2.018.532-.396.944-.86 1.353-1.32.524-.589 1.043-1.172 1.803-1.602 0-.05.026-.095.05-.137.044-.077.083-.144-.05-.211Zm-.242 3.687c1.699-1.738 3.502-3.548 5.895-3.339.241.104.486.348.59.59.241.627-.104 1.219-.59 1.67-1.665 1.532-3.85 2.192-6.138 1.984-.337-.218-.14-.435.048-.64.082-.091.163-.18.194-.265Zm26.63 7.028c1.11 2.714 2.046 6.992 0 9.602-.555.626-1.525 1.203-2.15.73-1.703-1.372-2.676-3.187-3.648-5.002-.334-.623-.669-1.246-1.032-1.852-.14-.07-.186.034-.233.142-.023.051-.046.103-.08.137-.189.875-.18 1.846-.172 2.82.015 1.696.03 3.396-1.006 4.59-.624.104-1.208-.218-1.422-.835-.58-1.794-.3-3.644-.023-5.468.104-.687.208-1.37.265-2.046.121-.313.225-.64.33-.967.314-.983.632-1.982 1.439-2.686 1.337.536 2.138 1.819 2.896 3.032.224.36.445.712.675 1.038.266.394.513.806.76 1.218.43.717.861 1.434 1.39 2.052.567-.244.474-.878.395-1.419-.022-.152-.043-.298-.049-.425-.245-1.99-.758-3.847-1.28-5.735v-.003l-.212-.767a5.076 5.076 0 0 0-.048-.401c-.078-.531-.171-1.17.291-1.443 1.386.618 2.06 1.974 2.68 3.22.078.159.156.315.234.468Zm-11.236.417c.348-.078.764-.73.764-1.252-.1-.302-.394-.41-.664-.509l-.03-.01c-4.092-.766-8.98-1.01-12.205 1.843-.624.695-.624 1.844-.347 2.678.144.392.763.73 1.248.835.734.07 1.474.12 2.212.17 1.807.123 3.604.245 5.278.665.121.047.252.093.389.14.761.267 1.673.585 1.76 1.53-.033.312-.415.625-.727.73l-.027.007c-2.698.764-5.738 1.624-8.468.41-.365-.183-.14-.766.173-.974 1.06-.515 2.026-.109 3.006.304 1.071.451 2.16.91 3.409.183.103-.07.238-.118.376-.166.34-.12.694-.243.596-.739-2.15-1.286-5.236-1.843-7.733-.834-.624.333-1 1.029-1.006 1.913.07 1.113 1.017 2.015 2.011 2.574 2.601 1.495 6.52 1.565 9.085-.07 1.041-.73 1.451-2.027 1.387-3.096-.104-1.357-.602-2.99-1.977-3.34-1.66-.422-3.405-.617-5.145-.812-.986-.11-1.97-.22-2.934-.371a2.407 2.407 0 0 0-.143-.054c-.241-.084-.533-.187-.447-.503 1.93-.645 4.088-.771 6.24-.898 1.326-.077 2.65-.155 3.92-.354Zm-14.389.07c.312 3.34.486 6.436.416 9.95-.055.357-.391.497-.701.626-.082.034-.162.067-.235.104-.554.104-1.271-.014-1.49-.313-.604-.974-.592-2.206-.58-3.426.003-.393.007-.785-.01-1.166.017-.405.03-.816.044-1.23.068-2.109.139-4.296.719-6.215.133-.334.52-.626.832-.418.832.418.97 1.253 1.005 2.088Zm38.526.417c.34-.188.166-.623 0-.904-.347-.522-.902-1.342-1.317-1.426-2.082-.244-4.37 0-6.416.418-.3.046-.607.062-.913.077-.614.031-1.224.062-1.756.34-.114.959.563 1.274 1.228 1.583.349.162.694.323.92.574-.217.244-.321.593-.424.935-.174.585-.344 1.153-1.066 1.153-.416.104-.694.521-.59 1.008.446.755.097 1.46-.25 2.162-.165.334-.33.668-.408 1.004-.382 1.46.12 3.18 1.248 3.687 3.004 1.261 5.823-.522 8.01-2.261.213-.49-.03-.927-.258-1.334l-.044-.08-.045-.082c-1.04-.226-2.17-.017-3.246.181-.25.047-.5.092-.743.132a4.758 4.758 0 0 0-.595.133c-.464.126-.894.242-1.311-.028.092-.258.151-.534.21-.808.14-.655.279-1.306.865-1.698.37-.195 1.242-.17 2.176-.142.716.021 1.468.044 2.055-.032.496-.027.698-1.186.52-1.496-.523-.749-1.527-.656-2.463-.57-.368.035-.726.068-1.04.048-.143.015-.267-.07-.393-.159-.042-.029-.084-.058-.128-.084-.172-.627.21-1.322.695-1.74.615-.07 1.266-.081 1.92-.092 1.261-.02 2.53-.04 3.559-.499Zm-73.653 1.6c2.22-.834 4.75-1.078 7.144-1.112.091.036.095.093.1.148.004.049.007.097.073.13.035 2.33.035 4.557-.312 6.819-1.456-.21-3.058-1.106-4.266-1.81-1.207-.705-2.496-1.705-3.398-2.922-.346-.592.209-1.079.66-1.252Zm78.818-4.278c-.05 1.49-.758 2.702-1.463 3.91-.726 1.245-1.45 2.485-1.45 4.021l.06.067c.076.086.142.163.252.108a51.002 51.002 0 0 0 1.522-1.777c1.78-2.143 3.69-4.44 6.246-5.25.868-.07 1.652.687 1.977 1.252 1.144 2.296.868 5.532-.728 7.62-1.646 2.048-4.508 4.104-7.767 3.756a44.734 44.734 0 0 0-2.81 10.506c-.209.55-.633.311-1.008.1a2.182 2.182 0 0 0-.343-.17c-2.509-1.988-.936-6.904-.436-8.466a8.87 8.87 0 0 0 .124-.406c.123-.483.478-1.39.863-2.369.212-.541.433-1.104.629-1.631-1.318-2.365-.486-5.219.588-7.41.832-1.461 1.978-2.923 3.33-4.036.172 0 .31.036.414.175Zm5.023 4.059c.16-.171.32-.343.561-.302.054.108.129.21.204.314.119.164.24.33.282.522.104 1.913-.902 3.582-2.496 4.591-.248.102-.493.225-.74.348-.686.344-1.382.694-2.174.591.797-2.154 2.39-3.962 3.984-5.77l.004-.004c.145-.044.26-.167.375-.29Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            {/* Item */}
            <div className="relative flex h-24 items-center justify-center rounded-2xl p-2 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <svg
                className="max-w-full fill-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                width={106}
                height={35}
                viewBox="0 0 106 35"
              >
                <path
                  d="M50.39 2.595c29.236-5.062 54.103-2.493 55.545 5.738.73 4.17-4.699 8.991-14.024 13.395.265-.386.434-.838.482-1.371.035-.378.038-.53.04-.735v-3.017h-4.03v1.696h1.14v1.575c0 .114-.002.278-.027.415-.013.08-.16.78-1.1.78-.949 0-1.095-.7-1.11-.78a2.275 2.275 0 0 1-.023-.416v-5.082c0-.204.014-.39.044-.518.053-.234.264-.779 1.079-.779.824 0 1.025.544 1.073.779.031.154.036.4.036.414v.659h2.895v-.455c0-.114.002-.408-.026-.685-.226-2.3-2.282-2.778-3.958-2.778-2.166 0-3.729.81-3.966 2.777a7.65 7.65 0 0 0-.046.738l-.001 4.676c0 .211.007.366.04.736.185 2.034 1.971 2.78 3.972 2.78.086 0 .169-.006.25-.012l.133-.008c-8.793 3.732-20.347 7.062-33.198 9.287C26.375 37.466 1.508 34.9.065 26.668c-.74-4.231 4.862-9.132 14.439-13.586a2.933 2.933 0 0 0-.255.793 3.82 3.82 0 0 0 .028 1.51c.28 1.318 1.714 2.098 2.99 2.792.943.513 1.8.98 2.043 1.583.1.251.076.58.02.802-.119.484-.464.72-1.055.72-.624 0-1.082-.345-1.082-.972l-.002-1.115h-3.073l-.002.895c0 1.892 1.183 3.265 4.097 3.265 2.087 0 3.727-.717 3.993-2.573.13-.907.047-1.54-.013-1.836-.269-1.334-1.81-2.154-3.119-2.851-.95-.506-1.779-.947-1.908-1.472a1.374 1.374 0 0 1-.012-.57c.108-.476.44-.718.979-.718.641 0 1.003.372 1.003.973v.72h2.867v-.816c0-.795-.236-1.434-.703-1.899-.598-.593-1.581-.895-2.908-.924 8.634-3.53 19.72-6.667 31.999-8.794ZM28.66 13.01l1.467 9.911h3.075l-2.067-11.192h-5.043l-2.08 11.192h3.092l1.504-9.91h.053Zm16.335 9.911-.068-9.719h-.05l-1.818 9.72h-2.901l-1.81-9.72h-.052l-.066 9.72h-2.874l.249-11.193h4.623l1.347 8.314h.066l1.35-8.314h4.621l.249 11.192h-2.866Zm9.583.378c1.51 0 3.645-.379 3.954-2.547.129-.903.047-1.527-.013-1.818-.267-1.319-1.792-2.129-3.089-2.817-.944-.502-1.768-.94-1.896-1.463a1.352 1.352 0 0 1-.014-.563c.108-.472.436-.711.979-.711.612 0 .993.352.993.963v.712h2.839v-.808c0-.787-.235-1.42-.698-1.88-.62-.618-1.656-.926-3.078-.926-1.59 0-3.566.425-3.9 2.472-.09.55-.082.984.028 1.496.276 1.3 1.7 2.077 2.965 2.768.933.51 1.78.973 2.018 1.564.097.246.074.571.02.795-.12.478-.462.711-1.045.711-.655 0-1.08-.365-1.08-.964l-.001-1.101h-3.037l-.001.884c0 2.168 1.55 3.233 4.056 3.233Zm14.47-3.564c.004.21-.016.63-.028.737-.173 1.845-1.5 2.782-3.931 2.782-2.442 0-3.77-.938-3.941-2.782a8.841 8.841 0 0 1-.029-.735v-8.01h2.905v8.263c-.003.185.007.321.025.416.036.184.22.78 1.04.78.817 0 1-.596 1.04-.778.015-.097.026-.24.026-.419v-8.263h2.893v8.01Zm8.473 3.072h4.042V11.728h-2.837l.148 8.516h-.059l-2.507-8.516h-4.212v11.078h2.817l-.15-8.865h.045l2.713 8.865Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
