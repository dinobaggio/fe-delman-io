const userColumns = [{
    accessorKey: 'id',
    header: () => 'ID',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'name',
    header: () => 'Name',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'email',
    header: () => 'Email',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'country_name',
    header: () => 'Country Name',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'device_id',
    header: () => 'Device ID',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'bitcoin_address',
    header: () => 'Bitcoin Address',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'avatar',
    header: () => 'Avatar',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'login_ip',
    header: () => 'Login IP',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'active_device_mac',
    header: () => 'Active Device Mac',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'notes',
    header: () => 'Notes',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'age',
    header: () => 'Age',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'referral_id',
    header: () => 'Referral ID',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'locale',
    header: () => 'Locale',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'favorite_music',
    header: () => 'Favorite Music',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'phone_number',
    header: () => 'Phone Number',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'twitter_username',
    header: () => 'Twitter Username',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'job',
    header: () => 'Job',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'invoice_email_address',
    header: () => 'Invoice Email Address',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'hmac_secret',
    header: () => 'Hmac Secret',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'favorite_quote',
    header: () => 'Favorite Quote',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'primary_color',
    header: () => 'Primary Color',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'secondary_color',
    header: () => 'Secondary Color',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'material',
    header: () => 'Material',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'shipping_address',
    header: () => 'Shipping Address',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'zip_code',
    header: () => 'Zip Code',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'latitude',
    header: () => 'Latitude',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'longitude',
    header: () => 'Longitude',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'favorite_animal',
    header: () => 'Favorite Animal',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'app_version',
    header: () => 'App Version',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}, {
    accessorKey: 'timezone',
    header: () => 'Timezone',
    footer: (props: { column: { id: any; }; }) => props.column.id,
}]

export default userColumns