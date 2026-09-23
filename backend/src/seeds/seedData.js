const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const User = require('../models/User');
const Donor = require('../models/Donor');

const seedDatabase = async () => {
  try {
    const mongoUri =
      process.env.MONGODB_URI ||
      'mongodb://127.0.0.1:27017/bizhack_blood_donor';

    console.log('[Seed] Connecting to MongoDB...');
    await mongoose.connect(mongoUri);

    console.log('[Seed] Clearing existing Users and Donors...');
    await User.deleteMany({});
    await Donor.deleteMany({});

    // Demo login passwords
    const adminPasswordHash = await bcrypt.hash('Admin@2026', 10);
    const donorPasswordHash = await bcrypt.hash('Donor@2026', 10);

    // =========================================================
    // ADMIN ACCOUNT
    // =========================================================

    const adminUser = await User.create({
      name: 'System Administrator',
      email: 'admin@bizhack.demo',
      passwordHash: adminPasswordHash,
      role: 'ADMIN',
      status: 'ACTIVE',
    });

    console.log(
      `[Seed] Admin created: ${adminUser.email} (Password: Admin@2026)`
    );

    // =========================================================
    // DEMO DONORS
    // =========================================================

    const sampleDonors = [
      {
        name: 'Rajesh Kumar',
        email: 'rajesh.erode@bizhack.com',
        bloodGroup: 'O+',
        phone: '+91 98421 11234',
        location: 'Erode',
        availability: 'AVAILABLE',
        status: 'ACTIVE',
        lastDonationDate: new Date('2026-06-15'),
      },

      {
        name: 'Priya Sundaram',
        email: 'priya.cbe@bizhack.com',
        bloodGroup: 'A+',
        phone: '+91 98432 22345',
        location: 'Coimbatore',
        availability: 'AVAILABLE',
        status: 'ACTIVE',
        lastDonationDate: new Date('2026-05-10'),
      },

      {
        name: 'Karthik Selvan',
        email: 'karthik.chennai@bizhack.com',
        bloodGroup: 'B+',
        phone: '+91 98443 33456',
        location: 'Chennai',
        availability: 'AVAILABLE',
        status: 'ACTIVE',
        lastDonationDate: new Date('2026-07-01'),
      },

      {
        name: 'Ananya Iyer',
        email: 'ananya.salem@bizhack.com',
        bloodGroup: 'AB+',
        phone: '+91 98454 44567',
        location: 'Salem',
        availability: 'AVAILABLE',
        status: 'ACTIVE',
        lastDonationDate: new Date('2026-04-20'),
      },

      {
        name: 'Vignesh Raman',
        email: 'vignesh.madurai@bizhack.com',
        bloodGroup: 'O-',
        phone: '+91 98465 55678',
        location: 'Madurai',
        availability: 'AVAILABLE',
        status: 'ACTIVE',
        lastDonationDate: new Date('2026-08-11'),
      },

      {
        name: 'Divya Bharathi',
        email: 'divya.erode@bizhack.com',
        bloodGroup: 'A-',
        phone: '+91 98476 66789',
        location: 'Erode',
        availability: 'AVAILABLE',
        status: 'ACTIVE',
        lastDonationDate: new Date('2026-03-12'),
      },

      {
        name: 'Suresh Chandran',
        email: 'suresh.trichy@bizhack.com',
        bloodGroup: 'B-',
        phone: '+91 98487 77890',
        location: 'Tiruchirappalli',
        availability: 'AVAILABLE',
        status: 'ACTIVE',
        lastDonationDate: new Date('2026-01-25'),
      },

      {
        name: 'Meera Nambiar',
        email: 'meera.cbe@bizhack.com',
        bloodGroup: 'AB-',
        phone: '+91 98498 88901',
        location: 'Coimbatore',
        availability: 'AVAILABLE',
        status: 'ACTIVE',
        lastDonationDate: new Date('2026-02-18'),
      },

      // Used to demonstrate the UNAVAILABLE condition
      {
        name: 'Rahul Varma',
        email: 'rahul.chennai@bizhack.com',
        bloodGroup: 'O+',
        phone: '+91 98509 99012',
        location: 'Chennai',
        availability: 'UNAVAILABLE',
        status: 'ACTIVE',
        lastDonationDate: new Date('2026-09-01'),
      },

      // Used to demonstrate the INACTIVE condition
      {
        name: 'Arvind Swamy',
        email: 'arvind.erode@bizhack.com',
        bloodGroup: 'B+',
        phone: '+91 98510 10123',
        location: 'Erode',
        availability: 'AVAILABLE',
        status: 'INACTIVE',
        lastDonationDate: new Date('2025-11-20'),
      },
    ];

    // =========================================================
    // CREATE DONOR USERS + DONOR PROFILES
    // =========================================================

    for (const donorData of sampleDonors) {
      const user = await User.create({
        name: donorData.name,
        email: donorData.email,
        passwordHash: donorPasswordHash,
        role: 'DONOR',
        status: donorData.status,
      });

      await Donor.create({
        userId: user._id,
        name: donorData.name,
        bloodGroup: donorData.bloodGroup,
        phone: donorData.phone,
        email: donorData.email,
        location: donorData.location,
        availability: donorData.availability,
        status: donorData.status,
        lastDonationDate: donorData.lastDonationDate,
      });
    }

    // =========================================================
    // DEMO LOGIN INFORMATION
    // =========================================================

    console.log('\n========================================');
    console.log('       BIZ HACK PS35 DEMO ACCOUNTS');
    console.log('========================================');

    console.log('\nADMIN');
    console.log('Email    : admin@bizhack.demo');
    console.log('Password : Admin@2026');

    console.log('\nACTIVE + AVAILABLE DONOR');
    console.log('Email    : rajesh.erode@bizhack.com');
    console.log('Password : Donor@2026');

    console.log('\nACTIVE + UNAVAILABLE DONOR');
    console.log('Email    : rahul.chennai@bizhack.com');
    console.log('Password : Donor@2026');

    console.log('\nINACTIVE DONOR');
    console.log('Email    : arvind.erode@bizhack.com');
    console.log('Password : Donor@2026');

    console.log('\n========================================');
    console.log(
      `[Seed] Successfully seeded ${sampleDonors.length} donors.`
    );
    console.log('========================================\n');

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('[Seed] Error seeding database:', error);

    try {
      await mongoose.connection.close();
    } catch (_) {}

    process.exit(1);
  }
};

seedDatabase();